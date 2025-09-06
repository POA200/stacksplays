import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function RequireAdmin() {
  const user = useAuth();
  const isAdmin = user?.role === "admin";
  const loc = useLocation();
  if (!isAdmin) return <Navigate to="/app" replace state={{ from: loc }} />;
  return <Outlet />;
}