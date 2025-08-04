import { uuid, varchar, pgTable, integer, boolean } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { users } from "./users";
import { modules } from "./modules";
import { relations } from "drizzle-orm";

export const lessons = pgTable("lessons", {
   id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
   order: integer("order"),
   title: varchar("title", { length: 255 }).notNull(),
   type: varchar("type", { length: 50 }),
   moduleId: uuid("module_id").references(() => modules.id),
});

export const lessonProgress = pgTable("lesson_progress", {
   id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
   userId: uuid("user_id").references(() => users.id),
   lessonId: uuid("lesson_id").references(() => lessons.id),
   completed: boolean("completed").default(false),
});

export const lessonRelations = relations(lessons, ({ one }) => ({
   module: one(modules, {
      fields: [lessons.moduleId],
      references: [modules.id],
   }),
}));
