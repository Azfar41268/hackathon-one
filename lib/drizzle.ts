import { pgTable, integer, varchar, serial } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

export const itemsTable = pgTable("items", {
    id: serial("id"),
    name: varchar("name", { length: 255 }).notNull(),
    url: varchar("url", { length: 255 }).notNull(),
    image: varchar("image", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 }).notNull(),
    price: integer("price").notNull(),
});

export type Item = InferModel<typeof itemsTable>;

export const db = drizzle(sql);
