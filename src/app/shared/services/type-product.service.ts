import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { TypeProduct } from "../models/type-product.model";

@Injectable()
export class TypeProductService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'typeProduct/';

  getTypeProducts(): Observable<TypeProduct[]> {
    return this.get(this.entity + 'findAllTypeProducts');
  }

  getTypeProductById(id: number): Observable<TypeProduct> {
    return this.get(this.entity + `findTypeProductById/${id}`);
  }

  addTypeProduct(typeProduct: TypeProduct): Observable<TypeProduct> {
    return this.post(this.entity + 'createTypeProduct', typeProduct);
  }

  updateTypeProduct(typeProduct: TypeProduct): Observable<TypeProduct> {
    return this.put(this.entity + 'updateTypeProduct', typeProduct);
  }
}
