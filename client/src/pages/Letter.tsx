import { LayoutContainer } from "@/components/layout/Container";
import { useParams } from "react-router-dom";

export const LetterLesson = () => {
   const { letter } = useParams();

   return (
      <LayoutContainer className="flex-1">
         <div>
            <h1>Letra: {letter}</h1>
         </div>
      </LayoutContainer>
   );
};
