import { LayoutContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { useModuleStore } from "@/stores/useModuleStore";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ModuleLesson = () => {
   const [stepIndex, setStepIndex] = useState(0);
   const [sessionAnswers, setSessionAnswers] = useState<Record<string, number>>({});
   const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

   const {
      isLoading,
      modules,
      completedLessons,
      getModules,
      addCompletedLesson,
      getCompletedLessons,
   } = useModuleStore();
   const { user } = useAuthStore();
   const { moduleOrder, lessonOrder } = useParams();
   const moduleIndex = Number(moduleOrder) - 1;
   const lessonIndex = Number(lessonOrder);

   const currentModule = modules[moduleIndex];

   const sortedLessons = currentModule?.lessons
      ?.slice()
      .sort((a, b) => a.order - b.order);

   const currentLessonIndex = sortedLessons?.findIndex(
      (lesson) => lesson.order === lessonIndex,
   );

   const currentLesson = sortedLessons?.[currentLessonIndex];

   const currentStep = currentLesson?.steps?.[stepIndex];
   const totalSteps = currentLesson?.steps?.length || 0;

   const answerKey = `Step-${stepIndex}`;
   const selectedAnswer = sessionAnswers[answerKey] ?? null;

   useEffect(() => {
      getModules();
      getCompletedLessons();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const navigate = useNavigate();

   const handleAnswerSelect = (answerIndex: number) => {
      setSessionAnswers((prev) => ({
         ...prev,
         [answerKey]: answerIndex,
      }));
   };

   const handleStep = (direction: number) => {
      if (direction === 1) {
         setCompletedSteps((prev) => new Set([...prev, stepIndex]));
         setStepIndex((prev) => Math.min(prev + 1, totalSteps - 1));
      } else {
         setStepIndex((prev) => Math.max(prev - 1, 0));
      }
   };

   const canCompleteLesson = () => {
      return completedSteps.size === totalSteps - 1;
   };

   const userCompletedLessons = completedLessons.filter((l) => l.userId === user?.id);
   const handleCompleteLesson = async () => {
      if (canCompleteLesson()) {
         const alreadyExists = userCompletedLessons.some(
            (l) => l.lessonId === currentLesson.id,
         );
         if (alreadyExists) {
            navigate(-1);
            return;
         }

         await addCompletedLesson(currentLesson.id);
         navigate(-1);
      }
   };

   useEffect(() => {
      const hasProgress =
         Object.keys(sessionAnswers).length > 0 || completedSteps.size > 0;

      if (hasProgress) {
         const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
         };

         window.addEventListener("beforeunload", handleBeforeUnload);
         return () => window.removeEventListener("beforeunload", handleBeforeUnload);
      }
   }, [sessionAnswers, completedSteps]);

   if (isLoading) {
      return (
         <LayoutContainer className="flex-1 flex items-center justify-center">
            <div className="text-gray-500">Cargando lección...</div>
         </LayoutContainer>
      );
   }

   if (!currentLesson || !currentStep) {
      return (
         <LayoutContainer className="relative flex-1 flex items-center justify-center">
            <button
               onClick={() => navigate(-1)}
               className="text-blue-600 hover:text-blue-600/80 font-medium flex items-center gap-2 absolute top-4 left-4"
            >
               <ArrowLeft className="w-4 h-4" /> Regresar
            </button>
            <p>Ups! Lección no encontrada...</p>
         </LayoutContainer>
      );
   }

   const renderStepContent = () => {
      switch (currentStep.type) {
         case "intro":
            return (
               <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Introducción</h2>
                  <p className="text-lg">{currentStep.intro?.text}</p>
                  <p className="text-lg font-medium">{currentStep.intro?.takeaway}</p>
                  {currentStep.intro?.videoUrl && (
                     <div className="flex-7 bg-gray-200 dark:bg-gray-200/30 rounded-md flex justify-center items-center p-2">
                        <video
                           controls
                           className="w-full max-w-2xl h-[300px] sm:h-[400px] rounded-md bg-black"
                           src={currentStep.intro.videoUrl}
                        >
                           Tu navegador no soporta el elemento de video.
                        </video>
                     </div>
                  )}
               </div>
            );

         case "quiz": {
            const question = currentStep.question;

            if (!question) {
               return <p>No hay pregunta disponible</p>;
            }
            return (
               <div className="space-y-6">
                  <div className="">
                     <h3 className="text-lg font-medium mb-4">{question.question}</h3>
                     <div className="space-y-3">
                        {question.options.map((option, index) => (
                           <button
                              key={index}
                              onClick={() => handleAnswerSelect(index)}
                              className={`w-full p-3 text-left rounded-lg border-2 transition-colors ${
                                 selectedAnswer === index
                                    ? "border-blue-500 bg-blue-100"
                                    : "border-gray-200 hover:border-gray-300"
                              }`}
                           >
                              {String.fromCharCode(65 + index)}. {option}
                           </button>
                        ))}
                     </div>

                     {selectedAnswer !== null && (
                        <div className="mt-4">
                           {selectedAnswer === question.answer ? (
                              <p className="text-green-600 font-medium">¡Correcto! 🎉</p>
                           ) : (
                              <p className="text-red-600 font-medium">
                                 Incorrecto. La respuesta correcta es:{" "}
                                 {String.fromCharCode(65 + question.answer)}
                              </p>
                           )}
                        </div>
                     )}
                  </div>
               </div>
            );
         }

         case "minigame":
            return (
               <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Minijuego</h2>
                  <div className="bg-yellow-50 p-8 rounded-lg text-center">
                     <p className="text-lg">🎮 Aquí iría el minijuego</p>
                     <p className="text-sm text-gray-600 mt-2">
                        Componente de minijuego por implementar
                     </p>
                  </div>
               </div>
            );

         default:
            return (
               <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Paso {currentStep.step}</h2>
                  <p>Tipo: {currentStep.type}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                     <p className="text-sm text-gray-600">
                        Tipo de paso no reconocido: {currentStep.type}
                     </p>
                  </div>
               </div>
            );
      }
   };

   return (
      <LayoutContainer className="flex-1 flex flex-col gap-8">
         <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-600/80 font-medium flex items-center gap-2"
         >
            <ArrowLeft className="w-4 h-4" /> Regresar
         </button>

         <div className="flex flex-col gap-8">
            <div className="">
               <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
               <p className="text-gray-600">
                  Paso {stepIndex + 1} de {totalSteps}
               </p>
            </div>

            <div className="min-h-[280px]">{renderStepContent()}</div>

            <div className="flex flex-col gap-4">
               <div className="flex sm:hidden gap-1 justify-center">
                  {Array.from({ length: totalSteps }, (_, index) => {
                     let bgColor = "bg-gray-300";

                     if (index === stepIndex) {
                        bgColor = "bg-blue-500";
                     } else if (completedSteps.has(index)) {
                        bgColor = "bg-green-400";
                     }

                     return (
                        <div key={index} className={`w-5 h-3 rounded-full ${bgColor}`} />
                     );
                  })}
               </div>

               <div className="flex flex-row sm:flex-row gap-2 justify-center sm:justify-between">
                  <Button
                     onClick={() => handleStep(0)}
                     disabled={stepIndex <= 0}
                     variant="outline"
                     className="flex-1 sm:max-w-50"
                  >
                     ← Anterior
                  </Button>

                  <div className="hidden sm:flex gap-1 items-center">
                     {Array.from({ length: totalSteps }, (_, index) => {
                        let bgColor = "bg-gray-300";

                        if (index === stepIndex) {
                           bgColor = "bg-blue-500";
                        } else if (completedSteps.has(index)) {
                           bgColor = "bg-green-400";
                        }

                        return (
                           <div
                              key={index}
                              className={`w-5 h-3 rounded-full ${bgColor}`}
                           />
                        );
                     })}
                  </div>

                  {stepIndex === totalSteps - 1 && canCompleteLesson() ? (
                     <Button
                        onClick={handleCompleteLesson}
                        className="flex-1 sm:max-w-50"
                        disabled={currentStep.type === "quiz" && selectedAnswer === null}
                     >
                        Completar Lección
                     </Button>
                  ) : (
                     <Button
                        onClick={() => handleStep(1)}
                        disabled={
                           stepIndex + 1 === totalSteps ||
                           (currentStep.type === "quiz" && selectedAnswer === null)
                        }
                        className="flex-1 sm:max-w-50"
                     >
                        Siguiente →
                     </Button>
                  )}
               </div>
            </div>
         </div>
      </LayoutContainer>
   );
};
