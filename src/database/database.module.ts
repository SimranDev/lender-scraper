import { Module } from '@nestjs/common'
import { DATABASE_CONNECTION } from './database-connection'
import { ConfigService } from '@nestjs/config'
import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'
import * as lenderSchema from '../lenders/schema'
import * as productSchema from '../products/schema'

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          connectionString: configService.getOrThrow('DB_URL'),
        })
        return drizzle(pool, {
          schema: {
            ...lenderSchema,
            ...productSchema,
          },
        })
      },
      inject: [ConfigService],
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
