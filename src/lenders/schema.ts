import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const lenders = pgTable('lenders', {
  id: uuid().primaryKey(),
  name: text().unique(),
})
