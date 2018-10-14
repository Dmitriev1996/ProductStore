import { Component, OnInit } from '@angular/core';
import {NgForm} from "../../../../node_modules/@angular/forms/src/directives/ng_form";
import {ClientService} from "../../shared/services/client.service";
import {Client} from "../../shared/models/client.model";
import {Sex} from "../../shared/models/sex.model";
import {Credential} from "../../shared/models/credential.model";
import {CityService} from "../../shared/services/city.service";
import {SexService} from "../../shared/services/sex.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private clientService: ClientService,
              private sexService: SexService) { }

  client: Client = new Client();
  sex: Sex = new Sex();
  credential: Credential = new Credential();
  surname: string;
  name: string;
  patronymic: string;
  dateOfBirth: string;
  gender: string;
  login: string;
  password: string;
  confirmPassword: string;
  recClient: Client;



  ngOnInit() {
  }

  paresDate(date: string): string {
    var dateParse: string = '';
    var mas: string[] = [];
    mas = date.split('.');
    console.log(mas);
    for(var i = mas.length-1; i>=0; i--) {
      console.log(i);
      dateParse += mas[i];
      if(i>=1) {
        dateParse += '-';
      }
    }
    return dateParse;
  }


  submitForm(form: NgForm) {
    console.log(this.surname);
    this.client.surname = this.surname;
    this.client.name = this.name;
    this.client.patronymic = this.patronymic;
    this.client.dateOfBirth = this.paresDate(this.dateOfBirth);
    if(this.gender == 'Мужской') {
      this.sex.sex_ID = 1;
    } else {
      this.sex.sex_ID = 2;
    }
    this.sex.sex = this.gender;
    this.client.sex = this.sex;
    this.credential.login = this.login;
    this.credential.password = this.password;
    this.credential.role = 'user';
    this.client.credential = this.credential;
    console.log(this.dateOfBirth);
    console.log(this.paresDate(this.dateOfBirth));
    this.clientService.addClient(this.client).subscribe();
    //console.log(this.recClient);
    /*console.log(this.surname);
    console.log(this.name);
    console.log(this.patronymic);
    console.log(this.dateOfBirth);
    console.log(this.gender);
    console.log(this.login);
    console.log(this.password);
    console.log(this.confirmPassword);
    console.log('Данные отправлены на сервер!', form);*/
  }

}
