import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  bns: string;
  role: "admin" | "user"; // strongly typed
  avatar: string;
};

const AuthContext = createContext<User | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    // Function to update user from localStorage
    const updateUser = () => {
      let address = "";
      let bns = "";
      let avatar = "/StacksplaysPunk.png";
      try {
        const userData = window.localStorage.getItem("stxUserSession");
        if (userData) {
          const parsed = JSON.parse(userData);
          address = parsed?.addresses?.stx?.[0]?.address || "";
          bns = parsed?.profile?.name || address;
        }
      } catch { }
      const ADMIN_ADDRESS = "SP2BWMDQ6FFHCRGRP1VCAXHSMYTDY8J0T0J5AZV4Q";
      const role = address === ADMIN_ADDRESS ? "admin" : "user";
      setUser({ bns, role, avatar });
    };

    updateUser();

    // Listen for changes to stxUserSession in localStorage
    const onStorage = (e: StorageEvent) => {
      if (e.key === "stxUserSession") updateUser();
    };
    window.addEventListener("storage", onStorage);

    // Poll every second in case WalletButton updates localStorage in same tab
    const interval = setInterval(updateUser, 1000);

    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  );
};