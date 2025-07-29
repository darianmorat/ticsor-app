import { LoginForm } from "@/components/auth/login-form";
import logo from "../assets/logo.png";
import authImage from "../assets/authImage.jpg";
import { ModeToggle } from "@/components/ui/ModeToggle";

export const Login = () => {
   return (
      <div className="grid min-h-svh lg:grid-cols-2">
         <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
               <img src={logo} className="h-8 size-10 dark:invert" alt="Ticsor Logo" />
               <span className="self-center font-semibold whitespace-nowrap dark:text-white">
                  Ticsor App
               </span>
            </div>
            <div className="flex flex-1 items-center justify-center">
               <div className="w-full max-w-xs">
                  <LoginForm />
               </div>
            </div>
         </div>
         <div className="bg-muted relative hidden lg:block">
            <img
               src={authImage}
               alt="Image"
               className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.40] dark:grayscale object-[30%]"
            />
         </div>
         <div className="absolute bottom-0 right-0 m-4 rounded-md shadow">
            <ModeToggle />
         </div>
      </div>
   );
};
