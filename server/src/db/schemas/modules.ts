import { uuid, varchar, pgTable, integer } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm";
import { lessons } from "./lessons";

export const modules = pgTable("modules", {
   id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
   order: integer("order").notNull(),
   title: varchar("title", { length: 255 }).notNull(),
});

export const moduleRelations = relations(modules, ({ many }) => ({
   lessons: many(lessons),
}));
