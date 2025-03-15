import { Inject, Injectable } from '@nestjs/common'
import { DATABASE_CONNECTION } from 'src/database/database-connection'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import * as schema from './schema'
import { eq } from 'drizzle-orm'

@Injectable()
export class RatesService {
  constructor(@Inject(DATABASE_CONNECTION) private readonly database: NodePgDatabase<typeof schema>) {}

  async getRates() {
    return this.database.query.rates.findMany({ with: { product: true } })
  }

  async createRate(rate: typeof schema.rates.$inferInsert) {
    return this.database
      .insert(schema.rates)
      .values(rate)
      .returning()
      .then((res) => res[0])
  }

  async getRatesByProduct(productId: string) {
    return this.database.query.rates.findMany({
      where: eq(schema.rates.productId, productId),
      orderBy: (rates, { desc }) => desc(rates.recordedAt),
      with: { product: true },
    })
  }
}
