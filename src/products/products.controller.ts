import { Body, Controller, Get, Post } from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductRequest } from './dto/create-product.request'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts() {
    return this.productsService.getProducts()
  }

  @Post()
  async createProduct(@Body() request: CreateProductRequest) {
    return this.productsService.createProduct(request)
  }
}
