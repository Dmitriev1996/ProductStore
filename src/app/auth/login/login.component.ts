import { Component, OnInit } from '@angular/core';
import {NgForm} from "../../../../node_modules/@angular/forms/src/directives/ng_form";
import {Credential} from "../../shared/models/credential.model";
import {CredentialService} from "../../shared/services/credential.service";
import {Status} from "../../shared/models/status.model";
import { Router } from '@angular/router';
import { Cookie } from '../../../../node_modules/ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status: Status = null;
  login: string;
  password: string;
  credential: Credential = new Credential();
  token: string;

  constructor(private credentialService: CredentialService,
              private router: Router) { }



  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.credential.login = this.login;
    this.credential.password = this.password;
    this.credentialService.login(this.credential).subscribe((status: Status) => {
      this.status = <Status>status;
      if(status.statusCode==200) {
        Cookie.set('Token', status.token);
        this.router.navigate(['/catalog']);
      }
    });

  }

}
