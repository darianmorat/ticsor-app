import { db } from "../db";

export const moduleService = {
   getAll: async () => {
      const result = await db.query.modules.findMany({
         with: {
            lessons: true,
         },
      });

      return result;
   },
};
