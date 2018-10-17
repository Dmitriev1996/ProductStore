import { Component, OnInit, OnChanges } from '@angular/core';
import { Client } from "../../../../shared/models/client.model";
import { ClientService } from '../../../../shared/services/client.service';
import { Cookie } from '../../../../../../node_modules/ng2-cookies/ng2-cookies';
import { AuthService } from "../../../../shared/services/auth.service";
import { Router } from '@angular/router';
import { City } from "../../../../shared/models/city.model";
import {CityService} from "../../../../shared/services/city.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  constructor(private clientService: ClientService,
              private authService: AuthService,
              private cityService: CityService,
              private router: Router) { }

  client: Client;
  token: string;
  city: string = '';
  cities: City[];
  saleValue: number;
  saleList: string[];
  tmp: string;


  ngOnInit() {
    this.cityService.getCities().subscribe((cities:City[]) => {
      this.cities = cities;
    });
    this.token = Cookie.get('Token');
    if(this.token!=null){
     this.clientService.getClientByToken(this.token).subscribe((client: Client) => {
        this.client = client;
      });
    }
    //Cookie.set('City', this.city);
    console.log(this.token);
    this.tmp = Cookie.get('saleList');
    console.log(this.tmp);
    if(this.tmp !== null) {
      this.saleList = this.tmp.split(',');
    }
      this.saleValue = this.saleList.length;

  }

  ngOnChanges() {
    Cookie.set('City', this.city);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/catalog']);
    window.location.reload();
  }


  login() {
    this.router.navigate(['/auth/login']);
  }

}
