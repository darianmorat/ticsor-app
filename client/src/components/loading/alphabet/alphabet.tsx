import { LayoutContainer } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonAlphabet = () => {
   return (
      <LayoutContainer className="flex-1 flex flex-col gap-4">
         <div className="flex items-center gap-2 mb-4 mt-0">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-32" />
         </div>

         <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between items-center">
               <div>
                  <Skeleton className="h-5 w-40 mb-1" />
                  <Skeleton className="h-4 w-32" />
               </div>
               <div className="flex flex-col items-end gap-1">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-4 w-24" />
               </div>
            </div>
            <Skeleton className="h-4 w-full rounded-full" />
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {Array.from({ length: 27 }).map((_, i) => (
               <div
                  key={i}
                  className="rounded-md border border-gray-200 dark:border-gray-200/15 p-4 shadow-md"
               >
                  <div className="flex flex-col items-center gap-3">
                     <Skeleton className="h-18 w-full rounded-md" />

                     <Skeleton className="h-8 w-full rounded-md" />
                  </div>
               </div>
            ))}
         </div>
      </LayoutContainer>
   );
};
