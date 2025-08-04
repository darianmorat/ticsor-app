import { db } from "../db";
import { alphabetLetters } from "../db/schemas/alphabet";

export const alphabetService = {
   getAll: async () => {
      const letters = await db.select().from(alphabetLetters);

      return letters;
   },
};
