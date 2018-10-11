import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import {Forum} from "../models/forum.model";

@Injectable()
export class ForumService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'forum/';

  getForums(): Observable<Forum[]> {
    return this.get(this.entity + 'findAllForums');
  }

  getForumById(id: number): Observable<Forum> {
    return this.get(this.entity + `findForumById/${id}`);
  }

  addForum(forum: Forum): Observable<Forum> {
    return this.post(this.entity + 'createForum', forum);
  }

  updateForum(forum: Forum): Observable<Forum> {
    return this.put(this.entity + 'updateForum', forum);
  }
}
