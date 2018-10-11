import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Credential } from "../models/credential.model";
import { Cookie } from '../../../../node_modules/ng2-cookies/ng2-cookies';

@Injectable()
export class AuthService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  token: string;

  login(credential: Credential): Observable<any> {
    return this.post('Authorisation', credential);
  }

  authentication(token: string): Observable<any> {
    return this.post('Authentication', token);
  }

  registration(credential: Credential): Observable<any> {
    return this.post('Registration', credential);
  }

  logout(): Observable<any> {
    this.token = Cookie.get('Token');
    Cookie.delete('Token');
    return this.post('Exit', this.token);
  }
}
