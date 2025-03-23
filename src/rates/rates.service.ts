import { Inject, Injectable } from '@nestjs/common'
import { DATABASE_CONNECTION } from 'src/database/database-connection'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import * as schema from './schema'
import { eq } from 'drizzle-orm'
import { removeNulls } from 'src/utils/util-fns'

@Injectable()
export class RatesService {
  constructor(@Inject(DATABASE_CONNECTION) private readonly database: NodePgDatabase<typeof schema>) {}

  async getRates() {
    return this.database.query.rates.findMany({ with: { product: true } })
  }

  async createRate(rate: typeof schema.rates.$inferInsert) {
    // 1. Find the latest rate for the same product (or however you identify previous rates)
    const previousRate = await this.database.query.rates.findFirst({
      where: (r, { eq }) => eq(r.productId, rate.productId),
      orderBy: (r, { desc }) => [desc(r.recordedAt)],
    })

    // 2. If previous rate exists and is exactly the same, skip insert
    if (previousRate) {
      const { id: _, recordedAt: __, ...prevComparable } = previousRate
      const { id: ___, recordedAt: ____, ...newComparable } = rate

      const isSame = JSON.stringify(removeNulls(prevComparable)) === JSON.stringify(newComparable)
      if (isSame) return previousRate // no new insert
    }

    // 3. Insert the new rate
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
