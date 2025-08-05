import { LayoutContainer } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useAlphabetStore } from "@/stores/useAlphabetStore";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Alphabet = () => {
   const {
      alphabet,
      getAlphabet,
      practicedLetters,
      practiceLetter,
      getPracticedLetters,
   } = useAlphabetStore();

   useEffect(() => {
      getAlphabet();
   }, [getAlphabet]);

   useEffect(() => {
      getPracticedLetters();
   }, [practicedLetters, getPracticedLetters]);

   const practiceAlphabetLetter = (letterId: string) => {
      const alreadyExists = practicedLetters.some((l) => l.letterId === letterId);
      if (alreadyExists) return;

      practiceLetter(letterId, true);
   };

   const getAlphabetProgress = () => {
      return (practicedLetters.length / alphabet.length) * 100;
   };

   const navigate = useNavigate();

   return (
      <LayoutContainer>
         <button
            onClick={() => navigate(-1)}
            className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
         >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
         </button>

         <div className="flex flex-col gap-2 mb-8">
            <div className="flex justify-between items-center">
               <div>
                  <h3 className="text-xl font-medium">Mi progreso:</h3>
                  <p className="text-muted-foreground text-sm">
                     {practicedLetters.length < 6 ? (
                        <>Suerte!</>
                     ) : practicedLetters.length < 26 ? (
                        <>Te falta poco!</>
                     ) : (
                        <>Lo lograste!</>
                     )}
                  </p>
               </div>
               <div className="flext flex-col gap-2 text-end">
                  <p className="text-xl font-medium">
                     {practicedLetters.length}/{alphabet.length}
                  </p>
                  <p className="text-muted-foreground text-sm">Letras completas</p>
               </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-200/20 rounded-full h-4">
               <div
                  className={`${practicedLetters.length === alphabet.length ? "bg-green-500" : "bg-gradient-to-r from-purple-500 to-green-500"} h-4 rounded-full transition-all duration-500`}
                  style={{
                     width: `${getAlphabetProgress()}%`,
                  }}
               ></div>
            </div>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {alphabet.map((letter) => {
               const isPracticed = practicedLetters.some((l) => l.letterId === letter.id);

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
                           onClick={() => practiceAlphabetLetter(letter.id)}
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
};
