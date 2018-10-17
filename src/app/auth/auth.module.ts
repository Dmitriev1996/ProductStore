import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule} from '@angular/forms';
import {ClientService} from "../shared/services/client.service";
import {SexService} from "../shared/services/sex.service";
import {CredentialService} from "../shared/services/credential.service";
//import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule/*,
    MaterialModule*/
  ],
  bootstrap: [AuthComponent],
  providers: [ClientService, SexService, CredentialService]
})
export class AuthModule {}
