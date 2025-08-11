import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonSection = () => {
   return (
      <div className="bg-gray-100 dark:bg-gray-100/15 rounded-md p-2">
         <div className="bg-background rounded-md p-4 flex flex-col md:flex-row justify-between gap-5 shadow-md">
            <div className="flex gap-4 items-center">
               <Skeleton className="h-20 w-20 rounded-md" />
               <div className="space-y-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-64" />
                  <Skeleton className="h-4 w-56" />
               </div>
            </div>

            <div className="flex flex-col gap-2 justify-center w-full md:w-auto">
               <Skeleton className="h-10 w-full md:w-48 rounded-md" />
            </div>
         </div>
      </div>
   );
};
