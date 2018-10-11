import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Client } from "../models/client.model";

@Injectable()
export class ClientService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'client/';

  getClients(): Observable<Client[]> {
    return this.get(this.entity + 'findAllClients');
  }

  addClient(client: Client): Observable<Client> {
    return this.post(this.entity + 'createClient', client);
  }

  getClientById(id: number): Observable<Client> {
    return this.get(this.entity + `findClientById/${id}`);
  }

  getClientByToken(token: string): Observable<Client> {
    return this.post(this.entity + 'findClientByToken', token);
  }

  updateClient(client: Client): Observable<Client> {
    return this.put(this.entity + 'updateClient', client);
  }
}
