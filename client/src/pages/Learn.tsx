import { LayoutContainer } from "@/components/layout/Container";
import { AlphabetSection } from "@/components/learn/alphabetSection";
import { Button } from "@/components/ui/button";
import { useModuleStore } from "@/stores/useModuleStore";
import { BookOpen, CheckCircle, Layers, Lock, Play } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ModuleProps = {
   id: string;
   order: number;
   title: string;
   lessons: Lesson[];
};

type Lesson = {
   id: string;
   order: number;
   title: string;
   type: string;
};

export const Learn = () => {
   const { modules, getModules, completedLessons, getCompletedLessons } =
      useModuleStore();

   useEffect(() => {
      getModules();
   }, [modules, getModules]);

   useEffect(() => {
      getCompletedLessons();
   }, [completedLessons, getCompletedLessons]);

   const getModuleProgress = (module: ModuleProps) => {
      if (module.lessons.length === 0) return 0;

      const completedCount = module.lessons.filter((lesson) =>
         completedLessons.some((l) => l.lessonId === lesson.id),
      ).length;

      return (completedCount / module.lessons.length) * 100;
   };

   const isModuleUnlocked = (module: ModuleProps) => {
      if (module.order === 1) return true;

      const previousModule = modules.find((m) => m.order === module.order - 1);
      if (!previousModule) return false;

      const previousModuleProgress = getModuleProgress(previousModule);
      return previousModuleProgress >= 80;
   };

   const navigate = useNavigate();

   const totalLesssons = modules.reduce(
      (total, module) => total + module.lessons.length,
      0,
   );

   return (
      <LayoutContainer className="flex flex-col gap-8">
         <h1 className="text-3xl font-bold text-center mt-4">
            Aprende{" "}
            <span className="relative inline-block">
               <span className="relative z-1">lengua de señas</span>
               <span className="absolute inset-0 bg-yellow-300 transform skew-y-1 animate-pulse opacity-70"></span>
            </span>
         </h1>

         <AlphabetSection />

         <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
               <div>
                  <h3 className="text-xl font-medium">Mi progreso:</h3>
                  <p className="text-muted-foreground text-sm">
                     {completedLessons.length < 6 ? (
                        <>Suerte!</>
                     ) : completedLessons.length < 12 ? (
                        <>Te falta poco!</>
                     ) : (
                        <>Lo lograste!</>
                     )}
                  </p>
               </div>
               <div className="flext flex-col gap-2 text-end">
                  <p className="text-xl font-medium ">
                     {completedLessons.length}/{totalLesssons}
                  </p>
                  <p className="text-muted-foreground text-sm">Lecciones completas</p>
               </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-200/20 rounded-full h-4">
               <div
                  className={`${completedLessons.length === 12 ? "bg-green-500" : "bg-gradient-to-r from-blue-500 to-green-500"} h-4 rounded-full transition-all duration-500`}
                  style={{
                     width: `${(completedLessons.length / 12) * 100}%`,
                  }}
               ></div>
            </div>
         </div>

         <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {modules.map((module) => {
               const progress = getModuleProgress(module);
               const isUnlocked = isModuleUnlocked(module);

               return (
                  <div
                     key={module.id}
                     className={`bg-gray-200 dark:bg-gray-200/30 rounded-md p-2 ${!isUnlocked && "text-muted-foreground/50"}`}
                  >
                     <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
                        <div className="flex gap-2">
                           <Layers /> <p className="font-medium">{module.title}</p>
                        </div>

                        <div className="">
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">
                                 {progress === 100 ? "Completado" : "Progreso"}
                              </span>
                              <span className="text-sm font-medium">
                                 {Math.round(progress)}%
                              </span>
                           </div>
                           <div className="w-full bg-gray-200 dark:bg-gray-200/20 rounded-full h-2">
                              <div
                                 className={`h-2 rounded-full transition-all duration-300 ${progress === 100 ? "bg-green-500" : "bg-blue-500"}`}
                                 style={{ width: `${progress}%` }}
                              ></div>
                           </div>
                        </div>

                        <Button
                           disabled={!isUnlocked}
                           // cursor style not applied!
                           className={`${progress === 100 && "bg-green-500 hover:bg-green-500/90"} ${!isUnlocked && "bg-gray-300 text-gray-700 cursor-not-allowed"}`}
                           onClick={() =>
                              isUnlocked && navigate(`/module/${module.order}`)
                           }
                        >
                           {progress === 100 ? (
                              <>
                                 <CheckCircle /> Revisar módulo
                              </>
                           ) : isUnlocked && progress === 0 ? (
                              <>
                                 <BookOpen /> Empezar módulo
                              </>
                           ) : isUnlocked ? (
                              <>
                                 <Play /> Continuar módulo
                              </>
                           ) : (
                              <>
                                 <Lock /> Bloqueado
                              </>
                           )}
                        </Button>
                     </div>
                  </div>
               );
            })}
         </div>
      </LayoutContainer>
   );
};
