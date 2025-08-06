import { eq, or } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema";
import { genSalt, hash } from "bcrypt-ts";

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

   find: async (username: string) => {
      const user = await db.query.users.findFirst({
         where: eq(users.username, username),
         with: {
            alphabetProgress: true,
            lessonProgress: true,
         },
      });

      return user;
   },

   findAll: async () => {
      const allUsers = await db.select().from(users);

      return allUsers;
   },

   exists: async (email: string, username: string) => {
      const [user] = await db
         .select({
            email: users.email,
            username: users.username,
         })
         .from(users)
         .where(or(eq(users.email, email), eq(users.username, username)))
         .limit(1);

      return user;
   },

   create: async (name: string, username: string, email: string, password: string) => {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      const [user] = await db
         .insert(users)
         .values({ name, username, email, password: hashedPassword })
         .returning();

      return user;
   },

   edit: async (
      id: string,
      name: string,
      username: string,
      email: string,
      password: string,
   ) => {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      const [user] = await db
         .update(users)
         .set({ name, username, email, password: hashedPassword })
         .where(eq(users.id, id))
         .returning();

      return user;
   },

   delete: async (id: string) => {
      const [user] = await db.delete(users).where(eq(users.id, id)).returning();

      return user;
   },
};
