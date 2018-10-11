import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Order } from "../models/order.model";

@Injectable()
export class OrderService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'order/';

  getOrders(): Observable<Order[]> {
    return this.get(this.entity + 'findAllOrders');
  }

  getOrderById(id: number): Observable<Order> {
    return this.get(this.entity + `findOrderById/${id}`);
  }

  addOrder(order: Order): Observable<Order> {
    return this.post(this.entity + 'createOrder', order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.put(this.entity + 'updateOrder', order);
  }
}
