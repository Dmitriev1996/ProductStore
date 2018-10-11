import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Transportation } from "../models/transportation.model";

@Injectable()
export class TransportationService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'transportation/';

  getTransportations(): Observable<Transportation[]> {
    return this.get(this.entity + 'findAllTransportations');
  }

  getTransportationById(id: number): Observable<Transportation> {
    return this.get(this.entity + `findTransportationById/${id}`);
  }

  addTransportation(transportation: Transportation): Observable<Transportation> {
    return this.post(this.entity + 'createTransportation', transportation);
  }

  updateTransportation(transportation: Transportation): Observable<Transportation> {
    return this.put(this.entity + 'updateTransportation', transportation);
  }
}
