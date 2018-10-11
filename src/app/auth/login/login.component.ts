import { Component, OnInit } from '@angular/core';
import {NgForm} from "../../../../node_modules/@angular/forms/src/directives/ng_form";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login: string;
  password: string;

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log(this.login);
    console.log(this.password);
    console.log("Данные отправлены на сервер!");
  }

}
