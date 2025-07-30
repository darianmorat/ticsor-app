import { useAuthStore } from "@/stores/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
   const { isAuth } = useAuthStore();
   return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};
