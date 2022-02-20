import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb://127.0.0.1:27017/products?directConnection=true&serverSelectionTimeoutMS=2000`
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
