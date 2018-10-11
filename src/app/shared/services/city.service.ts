import { BaseApi } from "../core/base-api";
import { Http } from '@angular/http';
import { City } from "../models/city.model";
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CityService extends BaseApi{
  constructor(public http: Http) {
    super(http);
  }

  entity: string = 'city/';

  addCity(city: City): Observable<City> {
    return this.post(this.entity+'createCity', city);
  }

  getCities(): Observable<City[]> {
    return this.get(this.entity+'findAllCities');
  }

  getCityById(id: number): Observable<City> {
    return this.get(this.entity+`findCityById/${id}`);
  }

  updateCity(city: City): Observable<City> {
    return this.put(this.entity+'updateCity', city);
  }


}
