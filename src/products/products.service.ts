import { Inject, Injectable } from '@nestjs/common'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { DATABASE_CONNECTION } from 'src/database/database-connection'
import * as schema from './schema'

@Injectable()
export class ProductsService {
  constructor(@Inject(DATABASE_CONNECTION) private readonly database: NodePgDatabase<typeof schema>) {}

  async getProducts() {
    return this.database.query.products.findMany({ with: { lender: true } })
  }

  async createProduct(product: typeof schema.products.$inferInsert) {
    return this.database
      .insert(schema.products)
      .values(product)
      .returning()
      .then((res) => res[0])
  }
}
