import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Sex } from "../models/sex.model";

@Injectable()
export class SexService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'sex/';

  getSexes(): Observable<Sex[]> {
    return this.get(this.entity + 'findAllSexes');
  }

  getSexById(id: number): Observable<Sex> {
    return this.get(this.entity + `findSexById/${id}`);
  }

  addSex(sex: Sex): Observable<Sex> {
    return this.post(this.entity + 'createSex', sex);
  }

  updateSex(sex: Sex): Observable<Sex> {
    return this.put(this.entity + 'updateSex', sex);
  }
}
