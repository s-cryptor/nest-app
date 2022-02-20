import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from 'src/schemas/product.schema'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ]
})
export class ProductsModule {}
