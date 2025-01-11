import { Module } from '@nestjs/common'
import { LendersController } from './lenders.controller'
import { LendersService } from './lenders.service'
import { DatabaseModule } from 'src/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [LendersController],
  providers: [LendersService],
})
export class LendersModule {}
