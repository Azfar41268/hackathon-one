import { pgTable, integer, varchar, serial } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

export const itemsTable = pgTable("items", {
    id: serial("id"),
    name: varchar("name", { length: 255 }),
    url: varchar("url", { length: 255 }),
    image: varchar("image", { length: 255 }),
    type: varchar("type", { length: 255 }),
    price: integer("price"),
});

export type Item = InferModel<typeof itemsTable>;

export const db = drizzle(sql);
