import { Http, Response, Request, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import {Headers} from "../../../../node_modules/@angular/http/src/headers";

@Injectable()
export class BaseApi {
  private baseUrl = 'http://localhost:8080/Shop-0.0.1-SNAPSHOT/api/';

  constructor(public http:Http) {
  }

  request: Request;


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
    this.request = new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    });
    return this.http.request(this.request).map((response) => response.json());
  }

}

