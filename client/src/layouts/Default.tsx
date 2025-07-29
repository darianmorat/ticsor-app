import { Navbar } from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

export const Default = () => {
   return (
      <>
         <Navbar />
         <Outlet />
      </>
   );
};
