import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/layout/Container";
import { User, Mail, Calendar, LogOut, PencilLine, BookOpen, Type } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useUserStore } from "@/stores/useUserStore";
import { formatDate } from "@/utils/formatDate";
import { useAlphabetStore } from "@/stores/useAlphabetStore";
import { useModuleStore } from "@/stores/useModuleStore";

export const Profile = () => {
   const { isLoading, userProfile, notFound, getUser } = useUserStore();
   const { alphabet, getAlphabet } = useAlphabetStore();
   const { modules, getModules } = useModuleStore();
   const { user, logout } = useAuthStore();

   const { username } = useParams();
   const navigate = useNavigate();

   const shortUserName = userProfile?.name?.slice(0, 1);
   const isMyProfile = user?.username === username;

   const progressAlphabetCount = userProfile?.alphabetProgress?.length || 0;
   const progressLessonCount = userProfile?.lessonProgress?.length || 0;

   const totalAlphabet = alphabet.length;
   const totalLessons = modules.reduce(
      (total, module) => total + module.lessons.length,
      0,
   );

   const lessonPercentage =
      totalLessons > 0 ? Math.round((progressLessonCount / totalLessons) * 100) : 0;

   const alphabetPercentage =
      totalAlphabet > 0 ? Math.round((progressAlphabetCount / totalAlphabet) * 100) : 0;

   useEffect(() => {
      if (username) {
         getUser(username);
         getAlphabet();
         getModules();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [username]);

   if (notFound) {
      return <Navigate to="/404" />;
   }

   if (isLoading) {
      return (
         <LayoutContainer className="flex-1 flex items-center justify-center">
            <div className="text-gray-500">Cargando perfil...</div>
         </LayoutContainer>
      );
   }

   return (
      <LayoutContainer className="flex-1 flex flex-col gap-4">
         {isMyProfile && (
            <div>
               <h1 className="text-3xl font-bold">Mi perfil</h1>
               <p className="text-muted-foreground">Gestiona tu información personal</p>
            </div>
         )}

         <div className="bg-gray-200 dark:bg-gray-200/30 rounded-md p-2 flex-1">
            <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
               <div className="flex justify-between items-center flex-wrap gap-4">
                  <div className="flex items-center">
                     <div className="w-16 h-16 bg-accent border rounded-md flex items-center justify-center">
                        <Avatar className="pb-1">
                           <AvatarImage src="" />
                           <AvatarFallback className="text-4xl">
                              {shortUserName}
                           </AvatarFallback>
                        </Avatar>
                     </div>
                     <div className="ml-4">
                        <h2 className="text-xl font-semibold">{userProfile?.name}</h2>
                        <p className="text-sm text-muted-foreground">Usuario activo</p>
                     </div>
                  </div>

                  {isMyProfile && (
                     <div className="flex space-x-3 w-full sm:w-fit">
                        <Button variant="outline" className="flex-1">
                           <PencilLine /> Editar perfil
                        </Button>
                        <Button
                           variant="outline"
                           className="text-red-600 hover:text-red-600 hover:bg-red-50 flex-1"
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
            </div>
         </div>

         <div className="flex flex-col gap-4 md:flex-row">
            <div className="bg-gray-200 dark:bg-gray-200/30 rounded-md p-2 flex-1">
               <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-4">
                        <BookOpen className="bg-blue-200 dark:bg-blue-700/30 p-2 rounded-md w-12 h-12 text-blue-700" />
                        <div>
                           <h3 className="font-medium">Lecciones</h3>
                           <p className="text-muted-foreground text-sm">
                              Lecciones del curso
                           </p>
                        </div>
                     </div>
                     <p className="text-xl font-medium">
                        {progressLessonCount}/{totalLessons}
                     </p>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-400/20 rounded-full h-4">
                     <div
                        className={`${
                           lessonPercentage === 100
                              ? "bg-green-500"
                              : "bg-gradient-to-r from-blue-500 to-green-500"
                        } h-4 rounded-full transition-all duration-500`}
                        style={{ width: `${lessonPercentage}%` }}
                     ></div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-[-10px]">
                     {lessonPercentage}% completado
                  </p>
               </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-200/30 rounded-md p-2 flex-1">
               <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-4">
                        <Type className="bg-purple-200 dark:bg-purple-600/30 p-2 rounded-md w-12 h-12 text-purple-700" />
                        <div>
                           <h3 className="font-medium">Alfabeto</h3>
                           <p className="text-muted-foreground text-sm">
                              Letras aprendidas
                           </p>
                        </div>
                     </div>
                     <p className="text-xl font-medium">
                        {progressAlphabetCount}/{totalAlphabet}
                     </p>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-400/20 rounded-full h-4">
                     <div
                        className={`${
                           alphabetPercentage === 100
                              ? "bg-green-500"
                              : "bg-gradient-to-r from-purple-500 to-green-500"
                        } h-4 rounded-full transition-all duration-500`}
                        style={{ width: `${alphabetPercentage}%` }}
                     ></div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-[-10px]">
                     {alphabetPercentage}% completado
                  </p>
               </div>
            </div>
         </div>

         <div className="bg-gray-200 dark:bg-gray-200/30 rounded-md p-2 flex-1">
            <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
               <h3 className="font-medium">Información personal</h3>
               <div className="space-y-4">
                  <div className="flex items-center p-3 border bg-accent/30 rounded-md">
                     <User className="w-5 h-5 text-muted-foreground mr-3" />
                     <div>
                        <label className="text-sm font-medium">Nombre completo</label>
                        <p className="text-muted-foreground">{userProfile?.name}</p>
                     </div>
                  </div>

                  <div className="flex items-center p-3 border bg-accent/30 rounded-md">
                     <Mail className="w-5 h-5 text-muted-foreground mr-3" />
                     <div>
                        <label className="text-sm font-medium">Correo electrónico</label>
                        <p className="text-muted-foreground">{userProfile?.email}</p>
                     </div>
                  </div>

                  <div className="flex items-center p-3 border bg-accent/30 rounded-md">
                     <Calendar className="w-5 h-5 text-muted-foreground mr-3" />
                     <div>
                        <label className="text-sm font-medium">Miembro desde</label>
                        <p className="text-muted-foreground">
                           {formatDate(userProfile?.createdAt)}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </LayoutContainer>
   );
};
