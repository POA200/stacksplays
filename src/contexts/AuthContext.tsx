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
    // TODO: Replace this mock with your wallet auth / backend fetch
    const fetchUser = async () => {
      const userData: User = {
        bns: "StacksPlays.btc",
        role: "admin", // change to "user" to test hiding admin
        avatar: "/StacksplaysPunk.png",
      };
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  );
};