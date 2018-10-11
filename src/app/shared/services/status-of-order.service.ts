import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { StatusOfOrder } from "../models/status-of-order.model";

@Injectable()
export class StatusOfOrderService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'statusOfOrder/';

  getStatusOfOrders(): Observable<StatusOfOrder[]> {
    return this.get(this.entity + 'findAllStatusOfOrders');
  }

  getStatusOfOrderById(id: number): Observable<StatusOfOrder> {
    return this.get(this.entity + `findStatusOfOrderById/${id}`);
  }

  addStatusOfOrder(statusOfOrder: StatusOfOrder): Observable<StatusOfOrder> {
    return this.post(this.entity + 'createStatusOfOrder', statusOfOrder);
  }

  updateStatusOfOrder(statusOfOrder: StatusOfOrder): Observable<StatusOfOrder> {
    return this.put(this.entity + 'updateStatusOfOrder', statusOfOrder);
  }
}
