import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { BonusCard } from "../models/bonus-card.model";

@Injectable()
export class BonusCardService extends BaseApi {
  constructor(public http: Http){
    super(http);
  }

  entity: string = 'bonusCard/';


  addBonusCard(bonusCard: BonusCard): Observable<BonusCard> {
    return this.post(this.entity + 'createBonusCard', bonusCard);
  }

  getBonusCards(): Observable<BonusCard[]> {
    return this.get(this.entity + 'findAllBonusCards');
  }

  updateBonusCard(bonusCard: BonusCard): Observable<BonusCard> {
    return this.put(this.entity + 'updateBonusCard', bonusCard);
  }

  getBonusCardById(id: number): Observable<BonusCard> {
    return this.get(this.entity + `findBonusCardById/${id}`);
  }
}
