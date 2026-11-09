import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly producSrevice: ProductService) { }

    @Get()
    getProduct() {
        return this.producSrevice.getAllProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.producSrevice.getProductById(Number(id));
    }
}
