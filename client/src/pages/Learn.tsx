import { LayoutContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useAlphabetStore } from "@/stores/useAlphabetStore";
import {
   ArrowLeft,
   Book,
   BookOpen,
   Brain,
   CheckCircle,
   Lock,
   Play,
   Target,
   Type,
   Users,
} from "lucide-react";
import { useEffect, useState, type JSX } from "react";

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
   type: string; // video, activity, game
   completed: boolean;
};

type UserProgress = {
   completedLessons: number[];
   practicedLetters: string[];
};

export const Learn = () => {
   const { alphabet, getAlphabet } = useAlphabetStore();
   const [showAlphabet, setShowAlphabet] = useState(false);
   const [selectedModule, setSelectedModule] = useState(null);

   const [userProgress, setUserProgress] = useState<UserProgress>({
      completedLessons: [],
      practicedLetters: [],
   });

   useEffect(() => {
      getAlphabet();
   }, [alphabet, getAlphabet]);

   // { id: 1, letter: "A", completed: false },
   // { id: 2, letter: "B", completed: false },
   // { id: 3, letter: "C", completed: false },

   const modules = [
      {
         id: 1,
         title: "Abecedario en Lengua de Señas Colombiana (LSC)",
         icon: <Book />,
         lessons: [
            { id: 1, title: "Abecedario", type: "activity", completed: true },
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

   // ALPHABET
   const practiceAlphabetLetter = (letter: string) => {
      if (!userProgress.practicedLetters.includes(letter)) {
         setUserProgress((prev) => ({
            ...prev,
            practicedLetters: [...prev.practicedLetters, letter],
         }));
      }
   };

   const getAlphabetProgress = () => {
      return (userProgress.practicedLetters.length / alphabet.length) * 100;
   };

   // MODULE
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
   const completeLesson = (lessonId: number) => {
      if (!userProgress.completedLessons.includes(lessonId)) {
         setUserProgress((prev) => ({
            ...prev,
            completedLessons: [...prev.completedLessons, lessonId],
         }));
      }
   };

   if (showAlphabet) {
      return (
         <LayoutContainer>
            <button
               onClick={() => setShowAlphabet(false)}
               className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
               <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </button>

            <div className="flex flex-col gap-2 mb-8">
               <div className="flex justify-between items-center">
                  <div>
                     <h3 className="text-xl font-medium">Mi progreso:</h3>
                     <p className="text-muted-foreground text-sm">
                        {userProgress.practicedLetters.length < 6 ? (
                           <>Suerte!</>
                        ) : userProgress.practicedLetters.length < 26 ? (
                           <>Te falta poco!</>
                        ) : (
                           <>Lo lograste!</>
                        )}
                     </p>
                  </div>
                  <div className="flext flex-col gap-2 text-end">
                     <p className="text-xl font-medium">
                        {userProgress.practicedLetters.length}/{alphabet.length}
                     </p>
                     <p className="text-muted-foreground text-sm">Letras completas</p>
                  </div>
               </div>
               <div className="w-full bg-gray-200 dark:bg-gray-200/20 rounded-full h-4">
                  <div
                     className={`${userProgress.practicedLetters.length === alphabet.length ? "bg-green-500" : "bg-gradient-to-r from-purple-500 to-green-500"} h-4 rounded-full transition-all duration-500`}
                     style={{
                        width: `${getAlphabetProgress()}%`,
                     }}
                  ></div>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
               {alphabet.map((letter) => {
                  const isPracticed = userProgress.practicedLetters.includes(
                     letter.letter,
                  );

                  return (
                     <div
                        key={letter.id}
                        className={`rounded-lg border p-6 text-center shadow-md ${
                           isPracticed
                              ? "border-green-500 dark:border-green-400/30 bg-green-50 dark:bg-green-900/20"
                              : "border-purple-400 dark:border-purple-400/30 bg-purple-50 dark:bg-purple-900/20"
                        }`}
                     >
                        <div className="flex flex-col items-center gap-3">
                           <div
                              className={`text-3xl font-medium capitalize ${isPracticed ? "text-green-600" : "text-purple-600"}`}
                           >
                              {letter.letter}
                           </div>

                           <Button
                              onClick={() => practiceAlphabetLetter(letter.letter)}
                              size="sm"
                              className={`w-full ${
                                 isPracticed
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-purple-500 hover:bg-purple-600"
                              }`}
                           >
                              {isPracticed ? <CheckCircle /> : <BookOpen />}
                              {isPracticed ? "Repasar" : "Practicar"}
                           </Button>
                        </div>
                     </div>
                  );
               })}
            </div>
         </LayoutContainer>
      );
   }

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
                        {module.icon} <p className="font-medium">{module.title}</p>
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
                                    completeLesson(lesson.id)
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

         <div className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 rounded-md p-2">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-md p-4 flex flex-col md:flex-row justify-between gap-5 shadow-md">
               <div className="flex gap-2 items-center">
                  <Type className="h-20 w-20 text-purple-600 hidden sm:block" />
                  <div>
                     <h2 className="flex gap-3 items-center text-xl font-bold text-purple-800 dark:text-purple-200">
                        Fundamentos: Abecedario LSC
                     </h2>
                     <p className="text-purple-700 dark:text-purple-300 max-w-sm">
                        Base esencial para comunicarte en lengua de señas. Siempre
                        disponible para practicar.
                     </p>
                  </div>
               </div>

               <div className="flex flex-col gap-2 justify-center">
                  <Button
                     onClick={() => setShowAlphabet(true)}
                     className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                  >
                     {getAlphabetProgress() > 0 ? <Play /> : <BookOpen />}
                     {getAlphabetProgress() > 0
                        ? "Continuar Alfabeto"
                        : "Empezar Alfabeto"}
                  </Button>
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
               <div>
                  <h3 className="text-xl font-medium">Mi progreso:</h3>
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
                  <p className="text-xl font-medium ">
                     {userProgress.completedLessons.length}/{totalLesssons}
                  </p>
                  <p className="text-muted-foreground text-sm">Lecciones completas</p>
               </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-200/20 rounded-full h-4">
               <div
                  className={`${userProgress.completedLessons.length === 12 ? "bg-green-500" : "bg-gradient-to-r from-blue-500 to-green-500"} h-4 rounded-full transition-all duration-500`}
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
                     className={`bg-gray-200 dark:bg-gray-200/30 rounded-md p-2 ${!isUnlocked && "text-muted-foreground/50"}`}
                  >
                     <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md">
                        <div className="flex gap-2">
                           {module.icon} <p className="font-medium">{module.title}</p>
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
