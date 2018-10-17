import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Credential } from "../models/credential.model";
import {Status} from "../models/status.model";

@Injectable()
export class CredentialService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'auth/';

  getCredentials(): Observable<Credential[]> {
    return this.get(this.entity + 'findAllCredentials');
  }

  login(credential: Credential): Observable<Status> {
    return this.post(this.entity + 'login', credential);
  }

  getCredentialById(id: number): Observable<Credential> {
    return this.get(this.entity + `findCredentialById/${id}`);
  }

  addCredential(credential: Credential): Observable<Status> {
    return this.post(this.entity + 'createCredential', credential);
  }

  updateCredential(credential: Credential): Observable<Credential> {
    return this.put(this.entity + 'updateCredential', credential);
  }
}
