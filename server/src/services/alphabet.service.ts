import { db } from "../db";
import { alphabet, alphabetProgress } from "../db/schema";

export const alphabetService = {
   getAll: async () => {
      const letters = await db.select().from(alphabet);

      return letters;
   },

   getAllPracticed: async () => {
      const letters = await db.select().from(alphabetProgress);

      return letters;
   },

   setLetterComplete: async (letterId: string, userId: string) => {
      const letter = await db
         .insert(alphabetProgress)
         .values({ letterId: letterId, userId: userId })
         .returning();

      return letter;
   },
};
