import { relations } from 'drizzle-orm'
import { decimal, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { products } from 'src/products/schema'

export const rates = pgTable('rates', {
  id: uuid('id').defaultRandom().primaryKey(),
  productId: uuid('product_id')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
  recordedAt: timestamp('recorded_at', { mode: 'date' }).defaultNow().notNull(),
  variableFloating: decimal('variable_floating', { precision: 5, scale: 2 }),
  sixMonths: decimal('six_months', { precision: 5, scale: 2 }),
  oneYear: decimal('one_year', { precision: 5, scale: 2 }),
  twoYears: decimal('two_years', { precision: 5, scale: 2 }),
  threeYears: decimal('three_years', { precision: 5, scale: 2 }),
  fourYears: decimal('four_years', { precision: 5, scale: 2 }),
  fiveYears: decimal('five_years', { precision: 5, scale: 2 }),
  specialTerm: varchar('special_term', { length: 255 }),
})

export const ratesRelations = relations(rates, ({ one }) => ({
  product: one(products, {
    fields: [rates.productId],
    references: [products.id],
  }),
}))
