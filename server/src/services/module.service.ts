import { db } from "../db";

export const moduleService = {
   getAll: async () => {
      const res = await db.query.modules.findMany({
         with: {
            lessons: true
         }
      });

      return res;
   },
};
