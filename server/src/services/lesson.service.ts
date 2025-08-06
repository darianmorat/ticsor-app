import { db } from "../db";
import { lessonProgress } from "../db/schema";

export const lessonService = {
   getAllCompleted: async () => {
      const result = await db.select().from(lessonProgress);

      return result;
   },

   addCompleted: async (lessonId: string, userId: string) => {
      const result = await db
         .insert(lessonProgress)
         .values({ lessonId: lessonId, userId: userId })
         .returning();

      return result;
   },
};
