import { LayoutContainer } from "@/components/layout/Container";
import { AlphabetSection } from "@/components/learn/alphabetSection";
import { ModuleSection } from "@/components/learn/moduleSection";
export const Learn = () => {
   return (
      <LayoutContainer className="flex flex-col gap-8">
         <h1 className="text-3xl font-bold text-center mt-4">
            Aprende{" "}
            <span className="relative inline-block">
               <span className="relative z-1">lengua de señas</span>
               <span className="absolute inset-0 bg-yellow-300 transform skew-y-1 animate-pulse opacity-70"></span>
            </span>
         </h1>
         <AlphabetSection />
         <ModuleSection />
      </LayoutContainer>
   );
};
