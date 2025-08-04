import { db } from "../index";
import { modules } from "../schema";

export const seedModules = async () => {
   const data = [
      {
         order: 1,
         title: "Abecedario en Lengua de Señas Colombiana (LSC)",
      },
      {
         order: 2,
         title: "Modulo de Comprensión Lectora a Nivel Literal",
      },
      {
         order: 3,
         title: "Módulo de Comprensión Lectora a Nivel Inferencial",
      },
      {
         order: 4,
         title: "Módulo de Comprensión Lectora a Nivel Crítica",
      },
   ];

   try {
      await db.insert(modules).values(data);
      console.log("Modules seeded successfully");
   } catch (error) {
      console.error("Error seeding Modules:", error);
      throw error;
   }
};
