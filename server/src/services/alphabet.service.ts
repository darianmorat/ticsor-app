import { db } from "../db";
import { alphabet } from "../db/schema";

export const alphabetService = {
   getAll: async () => {
      const letters = await db.select().from(alphabet);

      return letters;
   },
};
