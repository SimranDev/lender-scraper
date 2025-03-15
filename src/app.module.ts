import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config'
import { LendersModule } from './lenders/lenders.module'
import { ProductsModule } from './products/products.module'
import { RatesModule } from './rates/rates.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, LendersModule, ProductsModule, RatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
