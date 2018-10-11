import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ProductCatalogComponent } from './home-page/product-catalog/product-catalog.component';
import { ProductListComponent } from './home-page/product-catalog/product-list/product-list.component';
import { ProductDetailComponent } from './home-page/product-detail/product-detail.component';
import { ProductCommentComponent } from './home-page/product-detail/product-comment/product-comment.component';
import { ProductDescriptionComponent } from './home-page/product-detail/product-description/product-description.component';
import { ProfileComponent } from './home-page/profile/profile.component';
import { BonusCardService } from '../shared/services/bonus-card.service';
import { BuyService } from '../shared/services/buy.service';
import { ClientService } from '../shared/services/client.service';
import { CommentService } from '../shared/services/comment.service';
import { CredentialService } from '../shared/services/credential.service';
import { ForumService } from '../shared/services/forum.service';
import { MessageService } from '../shared/services/message.service';
import { OrderService } from '../shared/services/order.service';
import { ProductService } from '../shared/services/product.service';
import { SexService } from '../shared/services/sex.service';
import { StatusOfOrderService } from '../shared/services/status-of-order.service';
import { TransportationService } from '../shared/services/transportation.service';
import { TypeProductService } from "../shared/services/type-product.service";
import { CityService } from "../shared/services/city.service";
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { SafeHtml } from "./shared/pipes/safe-html.pipe";
import { CartComponent } from './shared/components/cart/cart.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations : [
    SystemComponent,
    ProductCatalogComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCommentComponent,
    ProductDescriptionComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    SearchBarComponent,
    SafeHtml,
    CartComponent
  ],
  providers: [BonusCardService, BuyService, ClientService, CommentService, CredentialService, TypeProductService,
  ForumService, MessageService, OrderService, ProductService, SexService, StatusOfOrderService, TransportationService,
  CityService]
})
export class SystemModule {}
