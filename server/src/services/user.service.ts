import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema";

export const userService = {
   findForAuth: async (email: string) => {
      const [user] = await db
         .select({
            id: users.id,
            password: users.password,
         })
         .from(users)
         .where(eq(users.email, email))
         .limit(1);

      return user;
   },

   findById: async (id: string) => {
      const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);

      return user;
   },
};
