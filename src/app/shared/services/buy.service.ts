import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Buy } from '../models/buy.model';

@Injectable()
export class BuyService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'buy/';

  addBuy(buy: Buy): Observable<Buy> {
    return this.post(this.entity + 'createBuys', buy);
  }

  getBuys(): Observable<Buy[]> {
    return this.get(this.entity + 'findAllBuys');
  }

  updateBuy(buy: Buy): Observable<Buy> {
    return this.put(this.entity + 'updateBuy', buy);
  }

  getBuyById(id: number): Observable<Buy> {
    return this.get(this.entity + `findBuyById/${id}`);
  }
}
