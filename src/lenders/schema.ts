import { relations } from 'drizzle-orm'
import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'
import { products } from 'src/products/schema'

export const lenders = pgTable('lenders', {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).unique(),
})

export const lenderRelations = relations(lenders, ({ many }) => ({
  products: many(products),
}))
