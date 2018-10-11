import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../core/base-api';
import { Comment } from "../models/comment.model";

@Injectable()
export class CommentService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'comment/';

  getComments(): Observable<Comment[]> {
    return this.get(this.entity + 'findAllComments');
  }

  getCommentById(id: number): Observable<Comment> {
    return this.get(this.entity + `findCommentById/${id}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.post(this.entity + 'createComment', comment);
  }

  updateComment(comment: Comment): Observable<Comment> {
    return this.put(this.entity + 'updateComment', comment);
  }
}
