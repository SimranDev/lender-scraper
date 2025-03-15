import { Module } from '@nestjs/common'
import { RatesService } from './rates.service'
import { RatesController } from './rates.controller'
import { DatabaseModule } from 'src/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
