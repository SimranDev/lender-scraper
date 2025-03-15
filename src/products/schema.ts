import { relations } from 'drizzle-orm'
import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'
import { lenders } from 'src/lenders/schema'
import { rates } from 'src/rates/schema'

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  lenderId: uuid('lender_id')
    .notNull()
    .references(() => lenders.id, { onDelete: 'cascade' }),
  name: varchar({ length: 255 }).unique().notNull(),
})

export const productRelations = relations(products, ({ one, many }) => ({
  lender: one(lenders, {
    fields: [products.lenderId],
    references: [lenders.id],
  }),
  rates: many(rates),
}))
