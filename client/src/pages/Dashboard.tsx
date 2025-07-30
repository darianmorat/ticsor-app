import { Button } from "@/components/ui/button";
import { LayoutContainer } from "@/components/layout/Container";
import { useState } from "react";
import { Users } from "@/components/dashboard/users/Users";

export const Dashboard = () => {
   const [isActive, setIsActive] = useState(1);
   const getVariant = (key: number) => (isActive === key ? "default" : "secondary");

   const sections = [
      { id: 1, name: "Usuarios" },
      { id: 2, name: "Módulos" },
   ];

   const renderContent = () => {
      switch (isActive) {
         case 1:
            return <Users />;
         case 2:
            return <Users />;
      }
   };

   return (
      <div className="pb-4">
         <div className="bg-blue-200 dark:bg-blue-950">
            <LayoutContainer size="medium">
               <h3 className="text-3xl font-bold">Panel de administración</h3>

               <div className="my-4 flex gap-2">
                  {sections.map((section) => (
                     <Button
                        key={section.id}
                        variant={getVariant(section.id)}
                        onClick={() => setIsActive(section.id)}
                     >
                        {section.name}
                     </Button>
                  ))}
               </div>
            </LayoutContainer>
         </div>

         <div>
            <LayoutContainer size="medium">
               <div className="flex flex-col">{renderContent()}</div>
            </LayoutContainer>
         </div>
      </div>
   );
};
