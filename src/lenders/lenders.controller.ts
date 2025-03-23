import { Body, Controller, Get, Post } from '@nestjs/common'
import { LendersService } from './lenders.service'
import { CreateLenderRequest } from './dto/create-lender.request'

@Controller('lenders')
export class LendersController {
  constructor(private readonly lendersService: LendersService) {}

  @Get()
  async getLenders() {
    return this.lendersService.getLenders()
  }

  @Post()
  async createLender(@Body() req: CreateLenderRequest) {
    return this.lendersService.createLender(req)
  }
}
