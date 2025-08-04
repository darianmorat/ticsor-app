import { uuid, boolean, varchar, pgTable, char } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { users } from "./users";

export const alphabet = pgTable("alphabet", {
   id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
   letter: char("letter", { length: 1 }).notNull(), // sort by a-z
   videoUrl: varchar("video_url"),
});

export const alphabetProgress = pgTable("alphabet_progress", {
   id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
   userId: uuid("user_id").references(() => users.id),
   letterId: uuid("letter_id").references(() => alphabet.id),
   completed: boolean("completed").default(false),
});
