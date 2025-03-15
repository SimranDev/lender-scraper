import { Controller, Get, Post, Body } from '@nestjs/common'
import { RatesService } from './rates.service'
import { CreateRateDto } from './dto/create-rate.dto'

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  getRates() {
    return this.ratesService.getRates()
  }

  @Post()
  createRate(@Body() req: CreateRateDto) {
    return this.ratesService.createRate(req)
  }
}
