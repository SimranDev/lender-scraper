import { Inject, Injectable } from '@nestjs/common'
import { DATABASE_CONNECTION } from 'src/database/database-connection'
import * as schema from './schema'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'

@Injectable()
export class LendersService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: NodePgDatabase<typeof schema>
  ) {}

  async getLenders() {
    return this.database.query.lenders.findMany()
  }

  async createLender(lender: typeof schema.lenders.$inferInsert) {
    await this.database.insert(schema.lenders).values(lender)
  }
}
