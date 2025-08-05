import { LayoutContainer } from "@/components/layout/Container";
import { AlphabetSection } from "@/components/learn/alphabetSection";
import { Button } from "@/components/ui/button";
import { useModuleStore } from "@/stores/useModuleStore";
import {
   ArrowLeft,
   Book,
   BookOpen,
   CheckCircle,
   Layers,
   Lock,
   Play,
   Target,
} from "lucide-react";
import { useEffect, useState } from "react";

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
   const { modules, getModules, completedLessons, getCompletedLessons, completeLesson } =
      useModuleStore();

   useEffect(() => {
      getModules();
   }, [modules, getModules]);

   useEffect(() => {
      getCompletedLessons();
   }, [completedLessons, getCompletedLessons]);

   const [selectedModule, setSelectedModule] = useState<string | null>(null);

   // MODULE
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

   // LESSON
   const getLessonIcon = (type: string, completed: boolean, isAccessible: boolean) => {
      let accesible;
      if (!isAccessible) accesible = "opacity-40";

      if (completed) return <CheckCircle className="w-5 h-5 text-green-500" />;

      switch (type) {
         case "video":
            return <Play className={`w-5 h-5 text-blue-500 ${accesible}`} />;
         case "activity":
            return <Book className={`w-5 h-5 text-orange-500 ${accesible}`} />;
         case "game":
            return <Target className={`w-5 h-5 text-purple-500 ${accesible}`} />;
         default:
            return <Play className={`w-5 h-5 text-gray-500 ${accesible}`} />;
      }
   };

   const totalLesssons = modules.reduce(
      (total, module) => total + module.lessons.length,
      0,
   );

   const handleCompleteLesson = (lessonId: string) => {
      const alreadyExists = completedLessons.some((l) => l.lessonId === lessonId);
      if (alreadyExists) return;

      completeLesson(lessonId, true);
   };

   if (selectedModule) {
      const module = modules.find((m) => m.id === selectedModule);
      if (!module) return;

      return (
         <LayoutContainer>
            <button
               onClick={() => setSelectedModule(null)}
               className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
               <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </button>

            <div className="bg-gray-200 dark:bg-gray-200/30 rounded-md p-2 mb-8">
               <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
                  <div className="flex flex-col gap-4">
                     <div className="flex gap-2">
                        <Layers /> <p className="font-medium">{module.title}</p>
                     </div>
                     <div className="flex items-center gap-2 mt-2 w-full">
                        <div className="w-full">
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">
                                 {getModuleProgress(module) === 100
                                    ? "Completado"
                                    : "Progreso"}
                              </span>
                              <span className="text-sm font-medium">
                                 {Math.round(getModuleProgress(module))}%
                              </span>
                           </div>
                           <div className="w-full bg-gray-200 dark:bg-gray-200/20 rounded-full h-2">
                              <div
                                 className={`h-2 rounded-full transition-all duration-300 ${getModuleProgress(module) === 100 ? "bg-green-500" : "bg-blue-500"}`}
                                 style={{ width: `${getModuleProgress(module)}%` }}
                              ></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               {module.lessons.map((lesson, index) => {
                  const isCompleted = completedLessons.some(
                     (l) => l.lessonId === lesson.id,
                  );

                  const isAccessible =
                     index === 0 ||
                     completedLessons.some(
                        (l) => l.lessonId === module.lessons[index - 1].id,
                     );

                  return (
                     <div
                        key={lesson.id}
                        className={`rounded-lg border p-4 border-l-5 shadow-md ${
                           isCompleted
                              ? "border-green-500"
                              : isAccessible
                                ? "border-blue-500"
                                : "border-gray-300"
                        }`}
                     >
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                           <div className="flex items-center justify-between gap-4 w-full">
                              <div className="flex gap-2 items-center">
                                 {getLessonIcon(lesson.type, isCompleted, isAccessible)}
                                 <div>
                                    <h3
                                       className={`font-medium ${
                                          isAccessible ? "" : "text-gray-400"
                                       }`}
                                    >
                                       {lesson.title}
                                    </h3>
                                    <p
                                       className={`text-sm ${
                                          isAccessible
                                             ? "text-muted-foreground"
                                             : "text-muted-foreground/50"
                                       }`}
                                    >
                                       {lesson.type === "video"
                                          ? "Video"
                                          : lesson.type === "activity"
                                            ? "Actividad"
                                            : "Juego"}
                                    </p>
                                 </div>
                              </div>
                              {isCompleted && (
                                 <span className="bg-green-100 dark:bg-green-200/20 text-green-800 dark:text-green-300/80 px-2 py-1 rounded-md text-sm">
                                    Completado
                                 </span>
                              )}
                           </div>

                           <div className="flex items-center gap-3 w-full sm:w-60">
                              <Button
                                 onClick={() =>
                                    !isCompleted &&
                                    isAccessible &&
                                    handleCompleteLesson(lesson.id)
                                 }
                                 disabled={!isAccessible}
                                 className={`w-full ${isCompleted && "bg-green-500 hover:bg-green-600"} ${!isAccessible && "bg-gray-300 text-gray-700 cursor-not-allowed"}`}
                              >
                                 {isCompleted ? (
                                    <>
                                       <CheckCircle /> Revisar lección
                                    </>
                                 ) : isAccessible ? (
                                    <>
                                       <BookOpen /> Empezar lección
                                    </>
                                 ) : (
                                    <>
                                       <Lock /> Bloqueado
                                    </>
                                 )}
                              </Button>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </LayoutContainer>
      );
   }

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
                           onClick={() => isUnlocked && setSelectedModule(module.id)}
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
