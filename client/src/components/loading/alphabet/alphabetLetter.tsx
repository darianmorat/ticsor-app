import { LayoutContainer } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";

export const SkeletonAlphabetLetter = () => {
   return (
      <LayoutContainer className="flex-1 flex flex-col gap-8 mt-1">
         <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
            <Skeleton className="h-4 w-20" />
         </div>

         <div className="flex flex-col gap-4 md:flex-row mt-1">
            <div className="flex-6 bg-gray-100 dark:bg-gray-100/15 rounded-md p-2 flex justify-center items-center">
               <Skeleton className="h-[330px] sm:h-[400px] md:h-[420px] rounded-md bg-background" />
            </div>

            <div className="flex-3 flex flex-col gap-4 sm:flex-row md:flex-col">
               <div className="flex-2 bg-gray-100 dark:bg-gray-100/15 rounded-md p-2">
                  <div className="bg-background rounded-md p-2 flex flex-col gap-2 shadow-md h-full text-center justify-center">
                     <Skeleton className="h-24 w-24 mx-auto rounded-md mb-2" />
                     <Skeleton className="h-4 w-20 mx-auto" />
                     <Skeleton className="h-5 w-28 mx-auto rounded-md" />
                  </div>
               </div>

               <div className="flex-2 bg-gray-100 dark:bg-gray-100/15 rounded-md p-2">
                  <div className="bg-background rounded-md p-4 flex flex-col gap-2 shadow-md h-full">
                     <Skeleton className="h-6 w-32 mb-2" />
                     <Skeleton className="h-4 w-full" />
                     <Skeleton className="h-4 w-2/3" />
                  </div>
               </div>
            </div>
         </div>
      </LayoutContainer>
   );
};
