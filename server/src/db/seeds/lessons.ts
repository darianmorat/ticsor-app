import { db } from "../index";
import { lessons, modules } from "../schema";

export const seedLessons = async () => {
   const moduleTable = await db.select().from(modules);

   const getId = (i: number) => {
      return moduleTable.find((m) => m.order === i)?.id;
   };

   const data = [
      { moduleId: getId(1), order: 1, title: "Abecedario", type: "activity" },
      { moduleId: getId(1), order: 2, title: "Letra B", type: "video" },
      { moduleId: getId(1), order: 3, title: "Letra C", type: "video" },
      { moduleId: getId(1), order: 4, title: "Actividad Práctica", type: "activity" },
      { moduleId: getId(1), order: 5, title: "Juego Interactivo", type: "game" },

      { moduleId: getId(2), order: 1, title: "Introducción", type: "video" },
      { moduleId: getId(2), order: 2, title: "Ejercicio 1", type: "activity" },
      { moduleId: getId(2), order: 3, title: "Quiz Literal", type: "game" },

      { moduleId: getId(3), order: 1, title: "Conceptos Básicos", type: "video" },
      { moduleId: getId(3), order: 2, title: "Práctica Inferencial", type: "activity" },

      { moduleId: getId(4), order: 1, title: "Análisis Crítico", type: "video" },
      { moduleId: getId(4), order: 2, title: "Evaluación Final", type: "activity" },
   ];

   try {
      await db.insert(lessons).values(data);
      console.log("Lessons seeded successfully");
   } catch (error) {
      console.error("Error seeding Lessons:", error);
      throw error;
   }
};
