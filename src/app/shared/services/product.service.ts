import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Product } from "../models/product.model";

@Injectable()
export class ProductService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'product/';

  getProducts(): Observable<Product[]> {
    return this.get(this.entity + 'findAllProducts');
  }

  getProductById(id: number): Observable<Product> {
    return this.get(this.entity + `findProductById/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.post(this.entity + 'createProduct', product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.put(this.entity + 'updateProduct', product);
  }
}
