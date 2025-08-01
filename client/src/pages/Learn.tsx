import { LayoutContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
   Book,
   BookOpen,
   Brain,
   CheckCircle,
   Lock,
   Play,
   Target,
   Users,
} from "lucide-react";
import { useState, type JSX } from "react";

export const Learn = () => {
   type moduleProps = {
      id: number;
      title: string;
      icon: JSX.Element;
      lessons: Lesson[];
      completed: boolean;
   };

   type Lesson = {
      id: number;
      title: string;
      type: string;
      completed: boolean;
   };

   // types can be just video, activity or game
   // create a types check for it, cuase u also need quizzes

   const modules = [
      {
         id: 1,
         title: "Abecedario en Lengua de Señas Colombiana (LSC)",
         icon: <Book />,
         lessons: [
            { id: 1, title: "Letra A", type: "video", completed: true },
            { id: 2, title: "Letra B", type: "video", completed: true },
            { id: 3, title: "Letra C", type: "video", completed: false },
            { id: 4, title: "Actividad Práctica", type: "activity", completed: false },
            { id: 5, title: "Juego Interactivo", type: "game", completed: false },
         ],
         completed: false,
      },
      {
         id: 2,
         title: "Modulo de Comprensión Lectora a Nivel Literal",
         icon: <Users />,
         lessons: [
            { id: 6, title: "Introducción", type: "video", completed: false },
            { id: 7, title: "Ejercicio 1", type: "activity", completed: false },
            { id: 8, title: "Quiz Literal", type: "game", completed: false },
         ],
         completed: false,
      },
      {
         id: 3,
         title: "Módulo de Comprensión Lectora a Nivel Inferencial",
         icon: <Brain />,
         lessons: [
            { id: 9, title: "Conceptos Básicos", type: "video", completed: false },
            { id: 10, title: "Práctica Inferencial", type: "activity", completed: false },
         ],
         completed: false,
      },
      {
         id: 4,
         title: "Módulo de Comprensión Lectora a Nivel Crítica",
         icon: <Target />,
         lessons: [
            { id: 11, title: "Análisis Crítico", type: "video", completed: false },
            { id: 12, title: "Evaluación Final", type: "activity", completed: false },
         ],
         completed: false,
      },
   ];

   const [selectedModule, setSelectedModule] = useState(null);
   const [userProgress, setUserProgress] = useState({
      completedLessons: [1, 2],
   });

   const completeLesson = (lessonId: number) => {
      if (!userProgress.completedLessons.includes(lessonId)) {
         setUserProgress((prev) => ({
            ...prev,
            completedLessons: [...prev.completedLessons, lessonId],
         }));
      }
   };

   const getModuleProgress = (module: moduleProps) => {
      const completedCount = module.lessons.filter((lesson) =>
         userProgress.completedLessons.includes(lesson.id),
      ).length;

      return (completedCount / module.lessons.length) * 100;
   };

   const isModuleUnlocked = (module: moduleProps) => {
      if (module.id === 1) return true;

      const previousModule = modules.find((m) => m.id === module.id - 1);
      if (!previousModule) return false;

      const previousModuleProgress = getModuleProgress(previousModule);
      return previousModuleProgress >= 80;
   };

   const getLessonIcon = (type: string, completed: boolean) => {
      if (completed) return <CheckCircle className="w-5 h-5 text-green-500" />;

      switch (type) {
         case "video":
            return <Play className="w-5 h-5 text-blue-500" />;
         case "activity":
            return <Book className="w-5 h-5 text-orange-500" />;
         case "game":
            return <Target className="w-5 h-5 text-purple-500" />;
         default:
            return <Play className="w-5 h-5 text-gray-500" />;
      }
   };

   if (selectedModule) {
      const module = modules.find((m) => m.id === selectedModule);
      if (!module) return;

      return (
         <LayoutContainer>
            <button
               onClick={() => setSelectedModule(null)}
               className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
            >
               ← Volver a módulos
            </button>

            <div className="bg-gray-200 dark:bg-gray-200/30 border rounded-md p-2 mb-8">
               <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
                  <div className="flex flex-col gap-4">
                     <div className="flex gap-2">
                        {module.icon} <p className="font-medium">{module.title}</p>
                     </div>
                     <div className="flex items-center gap-2 mt-2 w-full">
                        <div className="w-full">
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-sm">
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
                  const isCompleted = userProgress.completedLessons.includes(lesson.id);
                  const isAccessible =
                     index === 0 ||
                     userProgress.completedLessons.includes(module.lessons[index - 1].id);

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
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              {getLessonIcon(lesson.type, isCompleted)}
                              <div>
                                 <h3
                                    className={`font-semibold ${
                                       isAccessible ? "" : "text-gray-400"
                                    }`}
                                 >
                                    {lesson.title}
                                 </h3>
                                 <p className="text-sm text-muted-foreground capitalize">
                                    {lesson.type === "video"
                                       ? "Video"
                                       : lesson.type === "activity"
                                         ? "Actividad"
                                         : "Juego"}
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-center gap-3">
                              {isCompleted && (
                                 <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
                                    Completado
                                 </span>
                              )}

                              <Button
                                 onClick={() =>
                                    !isCompleted &&
                                    isAccessible &&
                                    completeLesson(lesson.id)
                                 }
                                 disabled={!isAccessible}
                                 className={`${isCompleted && "bg-green-500 hover:bg-green-600"} ${!isAccessible && "bg-gray-300 text-gray-700 cursor-not-allowed"}`}
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
         <h1 className="text-3xl font-bold text-center text-gray-800 mt-4">
            Aprende{" "}
            <span className="relative inline-block">
               <span className="relative z-1">lengua de señas</span>
               <span className="absolute inset-0 bg-yellow-300 transform skew-y-1 animate-pulse opacity-70"></span>
            </span>{" "}
            colombiana
         </h1>
         <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
               <div>
                  <h3 className="text-xl font-medium">Progreso general:</h3>
                  <p className="text-muted-foreground text-sm">
                     {userProgress.completedLessons.length < 6 ? (
                        <>Suerte!</>
                     ) : userProgress.completedLessons.length < 12 ? (
                        <>Te falta poco!</>
                     ) : (
                        <>Lo lograste!</>
                     )}
                  </p>
               </div>
               <div className="flext flex-col gap-2 text-end">
                  <p className="text-xl font-bold">
                     {userProgress.completedLessons.length}/12
                  </p>
                  <p className="text-muted-foreground text-sm">Lecciones completadas</p>
               </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-200/20 rounded-full h-4">
               <div
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
                  style={{
                     width: `${(userProgress.completedLessons.length / 12) * 100}%`,
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
                     className="bg-gray-200 dark:bg-gray-200/30 border rounded-md p-2"
                  >
                     <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
                        <div className="flex gap-2">
                           {module.icon} <p className="font-medium">{module.title}</p>
                        </div>

                        <div className="">
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-sm">
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
                           className={`${progress === 100 && "bg-green-500 hover:bg-green-600"} ${!isUnlocked && "bg-gray-300 text-gray-700 cursor-not-allowed"}`}
                           onClick={() => isUnlocked && setSelectedModule(module.id)}
                        >
                           {progress === 100 ? (
                              <>
                                 <CheckCircle /> Revisar módulo
                              </>
                           ) : isUnlocked ? (
                              <>
                                 <BookOpen /> Empezar módulo
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
