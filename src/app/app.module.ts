import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { SystemComponent } from './system/system.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomePageComponent } from './system/home-page/home-page.component';
import { ProductCatalogComponent } from './system/home-page/product-catalog/product-catalog.component';
import { ProductListComponent } from './system/home-page/product-catalog/product-list/product-list.component';
import { ProductDetailComponent } from './system/home-page/product-detail/product-detail.component';
import { ProductDescriptionComponent } from './system/home-page/product-detail/product-description/product-description.component';
import { ProductCommentComponent } from './system/home-page/product-detail/product-comment/product-comment.component';
import { ProfileComponent } from './system/home-page/profile/profile.component';
import { HeaderComponent } from './system/shared/components/header/header.component';
import { SidebarComponent } from './system/shared/components/sidebar/sidebar.component';
import { AuthModule } from "./auth/auth.module";
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
