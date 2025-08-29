import { useAlphabetStore } from "@/stores/useAlphabetStore";
import { useEffect, useState } from "react";

export const SpellName = () => {
   const { getAlphabet, alphabet } = useAlphabetStore();
   const [input, setInput] = useState("");

   useEffect(() => {
      getAlphabet();
   }, [getAlphabet]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const cleaned = e.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase();
      setInput(cleaned);
   };

   const separatedLetters = input
      .split("")
      .map((char) => alphabet.find((item) => item.letter === char))
      .filter(Boolean);

   return (
      <div className="flex flex-col gap-4">
         <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6 min-h-32 border border-gray-200 min-h-42">
            {separatedLetters.length > 0 ? (
               <div className="flex gap-3 flex-wrap justify-center">
                  {separatedLetters.map((letter, idx) => (
                     <div className="rounded shadow-sm overflow-hidden">
                        <img
                           key={`${letter!.id}-${idx}`}
                           src={letter!.imageUrl}
                           alt={letter!.letter}
                           className="w-36 h-36"
                        />
                        <p className="bg-gray-300 text-center font-bold capitalize p-2">
                           {letter?.letter}
                        </p>
                     </div>
                  ))}
               </div>
            ) : (
               <div className="flex items-center justify-center min-h-46">
                  <span className="text-gray-400">
                        Visualizador...
                  </span>
               </div>
            )}
         </div>

         <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            onChange={handleChange}
            value={input}
            placeholder="Escribe tu nombre aqui..."
         />
      </div>
   );
};
