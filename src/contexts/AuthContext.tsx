import React, { createContext, useContext, useState, useEffect } from "react";

// Context to provide user role
const AuthContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null); // Store user info here, e.g., role

  // Simulate API call to fetch user info (admin or regular user)
  useEffect(() => {
    // Replace this with your actual API logic or localStorage/sessionStorage check
    const fetchUser = async () => {
      const userData = {
        bns: "StacksPlays.btc", // Example user data
        role: "admin", // Change this for non-admin users
        avatar: "/StacksplaysPunk.png",
      };
      setUser(userData);
    };

    fetchUser();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};