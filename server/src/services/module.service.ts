import { db } from "../db";
import { lessonProgress } from "../db/schema";

export const moduleService = {
   getAll: async () => {
      const res = await db.query.modules.findMany({
         with: {
            lessons: true,
         },
      });

      return res;
   },

   getAllCompletedLesson: async () => {
      const lessons = await db.select().from(lessonProgress);

      return lessons;
   },

   setLessonComplete: async (lessonId: string, userId: string, completed: boolean) => {
      const lesson = await db
         .insert(lessonProgress)
         .values({ lessonId: lessonId, userId: userId, completed: completed })
         .returning();

      return lesson;
   },
};
