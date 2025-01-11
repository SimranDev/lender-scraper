import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config'
import { LendersModule } from './lenders/lenders.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, LendersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
