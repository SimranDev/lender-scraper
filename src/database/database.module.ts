import { Module } from '@nestjs/common'
import { DATABASE_CONNECTION } from './database-connection'
import { ConfigService } from '@nestjs/config'
import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          connectionString: configService.getOrThrow('DATABASE_URL'),
        })
        return drizzle(pool, {
          schema: {},
        })
      },
      inject: [ConfigService],
    },
  ],
})
export class DatabaseModule {}
