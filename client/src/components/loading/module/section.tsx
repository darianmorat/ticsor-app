import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonSection = () => {
   return (
      <>
         <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-30" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-full" />
         </div>

         <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="bg-gray-100 dark:bg-gray-100/15 rounded-md p-2">
                  <div className="bg-background rounded-md p-4 flex flex-col gap-5 shadow-md h-full">
                     <div className="flex gap-2">
                        <Skeleton className="h-6 w-6 rounded" />
                        <Skeleton className="h-6 w-32" />
                     </div>

                     <div>
                        <div className="flex justify-between items-center mb-2">
                           <Skeleton className="h-4 w-20" />
                           <Skeleton className="h-4 w-10" />
                        </div>
                        <Skeleton className="h-2 w-full rounded-full" />
                     </div>

                     <Skeleton className="h-10 w-full rounded-md" />
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};
