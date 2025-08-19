import { LayoutContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { useModuleStore } from "@/stores/useModuleStore";
import {
   ArrowLeft,
   Book,
   BookOpen,
   CheckCircle,
   CircleAlert,
   Layers,
   Lock,
   Target,
} from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Lesson = {
   id: string;
   order: number;
   title: string;
   type: string;
};

type ModuleProps = {
   id: string;
   order: number;
   title: string;
   lessons: Lesson[];
};

export const Module = () => {
   const {
      modules,
      completedLessons,
      getModules,
      getCompletedLessons,
   } = useModuleStore();
   const { user } = useAuthStore();
   const navigate = useNavigate();

   useEffect(() => {
      getModules();
      getCompletedLessons();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // MODULE
   const { moduleOrder: moduleIndex } = useParams();
   if (!moduleIndex) return;

   const module = modules.find((m) => m.order === Number(moduleIndex));
   if (!module) return;

   const getModuleProgress = (module: ModuleProps) => {
      if (module.lessons.length === 0) return 0;

      const completedCount = module.lessons.filter((lesson) =>
         userCompletedLessons.some((l) => l.lessonId === lesson.id),
      ).length;

      return (completedCount / module.lessons.length) * 100;
   };

   // LESSON
   const userCompletedLessons = completedLessons.filter((l) => l.userId === user?.id);

   const getLessonIcon = (type: string, completed: boolean, isAccessible: boolean) => {
      let accesible;
      if (!isAccessible) accesible = "opacity-40";

      if (completed) return <CheckCircle className="w-5 h-5 text-green-500" />;

      switch (type) {
         case "activity":
            return <Target className={`w-5 h-5 text-orange-500 ${accesible}`} />;
         case "quiz":
            return <Book className={`w-5 h-5 text-blue-500 ${accesible}`} />;
         default:
            return <CircleAlert className={`w-5 h-5 text-gray-500 ${accesible}`} />;
      }
   };

   return (
      <LayoutContainer className="flex-1 flex flex-col gap-8">
         <button
            onClick={() => navigate("/home")}
            className="text-blue-600 hover:text-blue-600/80 font-medium flex items-center gap-2"
         >
            <ArrowLeft className="w-4 h-4" /> Regresar
         </button>

         <div className="bg-gray-200 dark:bg-gray-200/30 rounded-md p-2">
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
            {module.lessons
               .slice()
               .sort((a, b) => a.order - b.order)
               .map((lesson, index) => {
                  const isCompleted = userCompletedLessons.some(
                     (l) => l.lessonId === lesson.id,
                  );

                  const isAccessible =
                     index === 0 ||
                     userCompletedLessons.some(
                        (l) => l.lessonId === module.lessons[index - 1].id,
                     );

                  return (
                     <div
                        key={lesson.id}
                        className={`rounded-md border-4 p-4 shadow-md ${
                           isCompleted
                              ? "border-green-500"
                              : isAccessible
                                ? "border-blue-500/70"
                                : "border-gray-300 dark:border-gray-300/50"
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
                                       {lesson.type === "activity"
                                          ? "Actividad"
                                          : lesson.type === "quiz"
                                            ? "Quiz"
                                            : "xxxxxx"}
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
                              <div
                                 className={`w-full ${!isAccessible && "cursor-not-allowed"}`}
                              >
                                 <Button
                                    onClick={() =>
                                       isAccessible &&
                                       navigate(
                                          `/module/${moduleIndex}/lesson/${lesson.order}`,
                                       )
                                    }
                                    disabled={!isAccessible}
                                    className={`w-full ${isCompleted && "bg-green-500 hover:bg-green-600"} ${!isAccessible && "bg-gray-300 dark:bg-gray-300/70 text-gray-700 dark:text-black/60 cursor-not-allowed"}`}
                                 >
                                    {isCompleted ? (
                                       <CheckCircle />
                                    ) : isAccessible ? (
                                       <BookOpen />
                                    ) : (
                                       <Lock />
                                    )}
                                    {isCompleted ? (
                                       <>Revisar lección</>
                                    ) : isAccessible ? (
                                       <>Empezar lección</>
                                    ) : (
                                       <>Bloqueado</>
                                    )}
                                 </Button>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
         </div>
      </LayoutContainer>
   );
};
