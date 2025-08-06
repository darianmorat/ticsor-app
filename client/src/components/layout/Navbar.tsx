import { Bell, Layers, LogOut, User } from "lucide-react";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../ui/ModeToggle";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";
import { LayoutContainer } from "./Container";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";

// PENDING:
// ADD AN AVATAR IMAGE FROM THE EDIT PROFILE, THIS CAN BE STORED IN THE CURRENT CLOUD
// PROVIDER, SO WE CAN HAVE MORE PERSONALIZATION

export const Navbar = () => {
   const { isAuth, user, logout } = useAuthStore();
   const isAdmin = useIsAdmin();
   const navigate = useNavigate();
   const shortUserName = user?.name.slice(0, 1);
   const username = user?.username;

   return (
      <nav className="w-full bg-zinc-100 dark:bg-zinc-900 border-b sticky top-0 z-10 shadow">
         <LayoutContainer>
            <div className="flex gap-4 justify-between">
               <a
                  onClick={() => navigate("/home")}
                  className="flex items-center gap-2 font-medium whitespace-nowrap cursor-pointer"
               >
                  <img src={logo} className="h-8 size-10 dark:invert" alt="Ticsor Logo" />
                  <p className="">Ticsor App</p>
               </a>
               <div className="flex gap-4">
                  {isAuth && (
                     <>
                        {isAdmin && (
                           <Button
                              variant={"outline"}
                              onClick={() => navigate("/dashboard")}
                              className="hidden sm:block"
                           >
                              Dashboard
                           </Button>
                        )}
                        <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                              <Avatar className="h-full w-9 cursor-pointer shadow-xs">
                                 <AvatarImage src="" />
                                 <AvatarFallback className="bg-background hover:bg-accent dark:bg-input/30 border dark:border-input">
                                    {shortUserName}
                                 </AvatarFallback>
                              </Avatar>
                           </DropdownMenuTrigger>
                           <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => navigate(`/${username}`)}>
                                 <User /> Perfil
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => navigate("#")}>
                                 <Bell /> Alertas
                              </DropdownMenuItem>

                              {isAdmin && (
                                 <DropdownMenuItem
                                    onClick={() => navigate("/dashboard")}
                                    className="sm:hidden"
                                 >
                                    <Layers /> Dashboard
                                 </DropdownMenuItem>
                              )}

                              <Separator className="my-1" />

                              <DropdownMenuItem
                                 className="text-red-600 focus:text-red-700 focus:bg-red-50 dark:focus:bg-red-50/10 dark:font-medium"
                                 onClick={() => logout()}
                              >
                                 <LogOut className="text-red-600" /> Cerrar sesión
                              </DropdownMenuItem>
                           </DropdownMenuContent>
                        </DropdownMenu>
                     </>
                  )}
                  <ModeToggle />
               </div>
            </div>
         </LayoutContainer>
      </nav>
   );
};
