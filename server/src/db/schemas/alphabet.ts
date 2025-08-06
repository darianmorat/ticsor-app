import { uuid, varchar, pgTable, char } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const alphabet = pgTable("alphabet", {
   id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
   letter: char("letter", { length: 1 }).notNull(),
   videoUrl: varchar("video_url").notNull(),
});

export const alphabetProgress = pgTable("alphabet_progress", {
   id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
   userId: uuid("user_id").references(() => users.id),
   letterId: uuid("letter_id").references(() => alphabet.id),
});

export const alphabetProgressRelations = relations(alphabetProgress, ({ one }) => ({
   user: one(users, {
      fields: [alphabetProgress.userId],
      references: [users.id],
   }),
}));
