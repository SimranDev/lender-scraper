import { Body, Controller, Get, Post } from '@nestjs/common'
import { LendersService } from './lenders.service'
import { CreateUserRequest } from './dto/create-user.request'

@Controller('lenders')
export class LendersController {
  constructor(private readonly lendersService: LendersService) {}

  @Get()
  async getLenders() {
    return this.lendersService.getLenders()
  }

  @Post()
  async createLender(@Body() request: CreateUserRequest) {
    return this.lendersService.createLender(request)
  }
}
