import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/pages/Footer";
import { Outlet } from "react-router-dom";

export const Default = () => {
   return (
      <div className="min-h-screen flex flex-col">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};
