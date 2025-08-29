import { LayoutContainer } from "@/components/layout/Container";
import { useAlphabetStore } from "@/stores/useAlphabetStore";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "@/components/ui/button";
import { SkeletonAlphabetLetter } from "@/components/loading/alphabet/alphabetLetter";

export const AlphabetLetter = () => {
   const [isCompleted, setIsCompleted] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const {
      alphabet,
      completedAlphabet,
      getAlphabet,
      getCompletedAlphabet,
      addCompletedLetter,
   } = useAlphabetStore();
   const { user } = useAuthStore();
   const { letter } = useParams();

   const navigate = useNavigate();

   useEffect(() => {
      const getData = async () => {
         await getAlphabet();
         await getCompletedAlphabet();

         setIsLoading(false);
      };

      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const currentLetter = alphabet.find((l) => l.letter === letter);
   const userPracticedLetters = completedAlphabet.filter((l) => l.userId === user?.id);
   const letterCompleted = userPracticedLetters.some(
      (l) => l.letterId === currentLetter?.id,
   );

   const nextLetter = currentLetter
      ? alphabet.find((l) => l.order === currentLetter.order + 1)
      : undefined;

   useEffect(() => {
      if (letterCompleted) {
         setIsCompleted(true);
      } else {
         setIsCompleted(false);
      }
   }, [letterCompleted]);

   const practiceAlphabetLetter = async (letterId?: string) => {
      if (!letterId) return;

      const alreadyExists = userPracticedLetters.some((l) => l.letterId === letterId);
      if (alreadyExists) return;

      await addCompletedLetter(letterId);
      await getCompletedAlphabet();
   };

   if (!isLoading && !currentLetter) {
      return <Navigate to={"/404"} />;
   }

   if (isLoading && !currentLetter) {
      return <SkeletonAlphabetLetter />;
   }

   return (
      <LayoutContainer className="flex-1 flex flex-col gap-8">
         <button
            onClick={() => navigate("/alphabet")}
            className="text-blue-600 hover:text-blue-600/80 font-medium flex items-center gap-2"
         >
            <ArrowLeft className="w-4 h-4" /> Regresar
         </button>
         <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-7 bg-gray-200 dark:bg-gray-200/30 rounded-md flex justify-center items-center p-2">
               <video
                  controls
                  className="w-full max-w-2xl h-[300px] sm:h-[400px] rounded-md bg-black"
                  src={currentLetter?.videoUrl}
                  onEnded={() => practiceAlphabetLetter(currentLetter?.id)}
               >
                  Tu navegador no soporta el elemento de video.
               </video>
            </div>
            <div className="flex-3 flex flex-col gap-4 sm:flex-row md:flex-col">
               <div className="flex-2 bg-gray-200 dark:bg-gray-200/30 rounded-md p-2">
                  <div className="bg-background rounded-md p-2 flex flex-col gap-4 shadow-md h-full text-center justify-center">
                     <h1 className="text-8xl font-semibold capitalize mt-[-10px]">
                        {letter}
                     </h1>
                     <p className="mt-[-10px]">- Letra -</p>
                     {isCompleted && (
                        <p className="bg-green-200/80 dark:bg-green-700/40 text-green-700 dark:text-green-400 rounded-md w-fit px-3 py-1 mx-auto">
                           Completada
                        </p>
                     )}
                  </div>
               </div>

               <div className="flex-2 bg-gray-200 dark:bg-gray-200/30 rounded-md p-2">
                  <div className="bg-background rounded-md p-4 flex flex-col gap-2 shadow-md h-full">
                     {isCompleted && nextLetter ? (
                        <div className="flex flex-col justify-center item h-full gap-2">
                           <h2 className="text-lg font-semibold">Felicidades</h2>
                           <p className="text-sm">
                              Has completado la letra "
                              <span className="font-medium capitalize">{letter}</span>".
                              Listo para la siguiente?
                           </p>
                           <Button
                              className="mt-3 bg-green-600 hover:bg-green-600/90"
                              onClick={() => navigate(`/alphabet/${nextLetter.letter}`)}
                           >
                              Siguiente letra: {nextLetter.letter.toUpperCase()}
                           </Button>
                        </div>
                     ) : isCompleted && !nextLetter ? (
                        <div className="flex flex-col justify-center item h-full gap-2">
                           <h2 className="text-lg font-semibold">Felicidades</h2>
                           <p className="text-sm">
                              Has completado la letra "
                              <span className="font-medium capitalize">{letter}</span>".
                              La cual es la ultima del alfabeto!
                           </p>
                           <Button
                              className="mt-3 bg-green-600 hover:bg-green-600/90"
                              onClick={() => navigate(`/alphabet/a`)}
                           >
                              Revisar letra: A
                           </Button>
                        </div>
                     ) : (
                        <>
                           <h2 className="text-lg font-semibold">Instrucciones</h2>
                           <p className="text-sm">
                              Mira el video completo para marcar esta letra como
                              completada. El progreso se guardará automáticamente al
                              finalizar.
                           </p>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </LayoutContainer>
   );
};
