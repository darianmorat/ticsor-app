import { useIsAdmin } from "@/hooks/useIsAdmin";
import { useAuthStore } from "@/stores/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

export const SecureRoute = () => {
   const { isAuth } = useAuthStore();
   const isAdmin = useIsAdmin();

   return isAuth && isAdmin ? <Outlet /> : <Navigate to={"/"} />;
};
