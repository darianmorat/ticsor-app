import { db } from "../db";
import { lessonProgress } from "../db/schema";

export const moduleService = {
   getAll: async () => {
      const result = await db.query.modules.findMany({
         with: {
            lessons: true,
         },
      });

      return result;
   },

   getAllCompletedLesson: async () => {
      const result = await db.select().from(lessonProgress);

      return result;
   },

   setLessonComplete: async (lessonId: string, userId: string) => {
      const result = await db
         .insert(lessonProgress)
         .values({ lessonId: lessonId, userId: userId })
         .returning();

      return result;
   },
};
