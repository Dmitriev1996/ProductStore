import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Message } from "../models/message.model";

@Injectable()
export class MessageService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'message/';

  getMessages(): Observable<Message[]> {
    return this.get(this.entity + 'findAllMessages');
  }

  getMessageById(id: number): Observable<Message> {
    return this.get(this.entity + `findMessageById/${id}`);
  }

  addMessage(message: Message): Observable<Message> {
    return this.post(this.entity + 'createMessage', message);
  }

  updateMessage(message: Message): Observable<Message> {
    return this.post(this.entity + 'updateMessage', message);
  }
}
