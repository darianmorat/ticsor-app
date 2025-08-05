import { BookOpen, Play, Type } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useAlphabetStore } from "@/stores/useAlphabetStore";
import { useNavigate } from "react-router-dom";

export const AlphabetSection = () => {
   const {
      alphabet,
      getAlphabet,
      practicedLetters,
   } = useAlphabetStore();
   const navigate = useNavigate();

   useEffect(() => {
      getAlphabet();
   }, [alphabet, getAlphabet]);

   const getAlphabetProgress = () => {
      return (practicedLetters.length / alphabet.length) * 100;
   };

   return (
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 rounded-md p-2">
         <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-md p-4 flex flex-col md:flex-row justify-between gap-5 shadow-md">
            <div className="flex gap-2 items-center">
               <Type className="h-20 w-20 text-purple-600 hidden sm:block" />
               <div>
                  <h2 className="flex gap-3 items-center text-xl font-bold text-purple-800 dark:text-purple-200">
                     Fundamentos: Abecedario LSC
                  </h2>
                  <p className="text-purple-700 dark:text-purple-300 max-w-sm">
                     Base esencial para comunicarte en lengua de señas. Siempre disponible
                     para practicar.
                  </p>
               </div>
            </div>

            <div className="flex flex-col gap-2 justify-center">
               <Button
                  onClick={() => navigate("/alphabet")}
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full"
               >
                  {getAlphabetProgress() > 0 ? <Play /> : <BookOpen />}
                  {getAlphabetProgress() > 0 ? "Continuar Alfabeto" : "Empezar Alfabeto"}
               </Button>
            </div>
         </div>
      </div>
   );
};
