import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/pages/Footer";
import { Outlet } from "react-router-dom";

export const Default = () => {
   return (
      <>
         <Navbar />
         <Outlet />
         <Footer/>
      </>
   );
};
