import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule} from '@angular/forms';
import {ClientService} from "../shared/services/client.service";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  bootstrap: [AuthComponent],
  providers: [ClientService]
})
export class AuthModule {}
