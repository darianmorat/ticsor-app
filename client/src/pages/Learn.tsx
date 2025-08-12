import { LayoutContainer } from "@/components/layout/Container";
import { AlphabetSection } from "@/components/learn/alphabetSection";
import { ModuleSection } from "@/components/learn/moduleSection";

export const Learn = () => {
   return (
      <LayoutContainer className="flex-1 flex flex-col gap-8">
         <h1 className="text-3xl font-bold text-center mt-4">
            Aprende{" "}
            <span className="relative inline-block p-1">
               <span className="relative z-1">lengua de señas</span>
               <span className="absolute inset-0 bg-yellow-300 transform -skew-y-2 opacity-50 rounded-sm"></span>
            </span>
         </h1>
         <AlphabetSection />
         <ModuleSection />
      </LayoutContainer>
   );
};
