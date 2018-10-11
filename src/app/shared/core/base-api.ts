import { Http, Response, Request, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class BaseApi {
  private baseUrl = 'http://localhost:8080/Shop-0.0.1-SNAPSHOT/api/';

  constructor(public http:Http) {
  }

  get(url: string): Observable<any> {
    return this.sendRequest(RequestMethod.Get, url);
  }

  post(url: string, object: any): Observable<any> {
    return this.sendRequest(RequestMethod.Post, url, object);
  }

  put(url: string, object: any): Observable<any> {
    return this.sendRequest(RequestMethod.Put, object);
  }

  private sendRequest(verb:RequestMethod,
                      url:string, body?:any): Observable<any> {
    return this.http.request(new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    })).map(response => response.json());
  }

}

