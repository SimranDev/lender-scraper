import { relations } from 'drizzle-orm'
import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'
import { lenders } from 'src/lenders/schema'

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).unique(),
  lenderId: uuid('lender_id')
    .notNull()
    .references(() => lenders.id),
})

export const productRelations = relations(products, ({ one }) => ({
  lender: one(lenders, {
    fields: [products.lenderId],
    references: [lenders.id],
  }),
}))
