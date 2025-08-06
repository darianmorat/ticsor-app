import { db } from "../db";
import { alphabet, alphabetProgress } from "../db/schema";

export const alphabetService = {
   getAll: async () => {
      const result = await db.select().from(alphabet);

      return result;
   },

   getAllCompleted: async () => {
      const result = await db.select().from(alphabetProgress);

      return result;
   },

   addCompleted: async (letterId: string, userId: string) => {
      const result = await db
         .insert(alphabetProgress)
         .values({ letterId: letterId, userId: userId })
         .returning();

      return result;
   },
};
