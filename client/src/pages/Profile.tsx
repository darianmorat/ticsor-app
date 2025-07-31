import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/layout/Container";
import { User, Mail, Calendar, LogOut, PencilLine } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useUserStore } from "@/stores/useUserStore";
import { formatDate } from "@/utils/formatDate";

export const Profile = () => {
   const { isLoading, userProfile, notFound, getUser } = useUserStore();
   const { user, logout } = useAuthStore();
   const { username } = useParams();

   const shortUserName = userProfile?.name.slice(0, 1);
   const isMyProfile = user?.username === username;

   const navigate = useNavigate();

   useEffect(() => {
      if (username) {
         getUser(username);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [username]);

   if (isLoading) {
      return (
         <LayoutContainer>
            <div className="flex items-center justify-center h-screen mt-[-50px]">
               <div className="text-gray-500">Cargando perfil...</div>
            </div>
         </LayoutContainer>
      );
   }

   if (notFound) {
      return <Navigate to="/404" />;
   }

   return (
      <LayoutContainer>
         {isMyProfile && (
            <div className="mb-8">
               <h1 className="text-3xl font-bold">Mi perfil</h1>
               <p className="text-muted-foreground">Gestiona tu información personal</p>
            </div>
         )}

         <div className="rounded-lg border p-6 flex flex-col gap-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
               <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-200/80 rounded-full flex items-center justify-center">
                     <Avatar className="cursor-pointer pb-1">
                        <AvatarImage src="" />
                        <AvatarFallback className="text-4xl text-blue-600">
                           {shortUserName}
                        </AvatarFallback>
                     </Avatar>
                  </div>
                  <div className="ml-4">
                     <h2 className="text-xl font-semibold ">{userProfile?.name}</h2>
                     <p className="text-muted-foreground">Usuario activo</p>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <div className="flex items-center p-3 border bg-accent/30 rounded-lg">
                  <User className="w-5 h-5 text-muted-foreground mr-3" />
                  <div>
                     <label className="text-sm font-medium">Nombre completo</label>
                     <p className="text-muted-foreground">{userProfile?.name}</p>
                  </div>
               </div>

               <div className="flex items-center p-3 border bg-accent/30 rounded-lg">
                  <Mail className="w-5 h-5 text-muted-foreground mr-3" />
                  <div>
                     <label className="text-sm font-medium">Correo electrónico</label>
                     <p className="text-muted-foreground">{userProfile?.email}</p>
                  </div>
               </div>

               <div className="flex items-center p-3 border bg-accent/30 rounded-lg">
                  <Calendar className="w-5 h-5 text-muted-foreground mr-3" />
                  <div>
                     <label className="text-sm font-medium">Miembro desde</label>
                     <p className="text-muted-foreground">
                        {formatDate(userProfile?.createdAt)}
                     </p>
                  </div>
               </div>
            </div>

            {isMyProfile && (
               <div className="flex self-end justify-end space-x-3 w-full sm:w-fit">
                  <Button variant="outline" className="flex-1">
                     <PencilLine /> Editar perfil
                  </Button>
                  <Button
                     variant="outline"
                     className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-1"
                     onClick={() => {
                        navigate("/");
                        logout();
                     }}
                  >
                     <LogOut /> Cerrar sesión
                  </Button>
               </div>
            )}
         </div>
      </LayoutContainer>
   );
};
