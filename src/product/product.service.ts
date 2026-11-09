import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private product = [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 300 }
    ];
    getAllProducts() {
        return this.product;
    }

    getProductById(id: number) {
        return this.product.find((product) => product.id === id)

    }
}

