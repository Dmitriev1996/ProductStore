import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCatalogComponent } from './home-page/product-catalog/product-catalog.component';
import { ProductListComponent } from './home-page/product-catalog/product-list/product-list.component';
import { ProductDetailComponent } from './home-page/product-detail/product-detail.component';
import { ProductCommentComponent } from './home-page/product-detail/product-comment/product-comment.component';
import { ProductDescriptionComponent } from './home-page/product-detail/product-description/product-description.component';
import { ProfileComponent } from './home-page/profile/profile.component';
import { SystemComponent } from "./system.component";
import {CartComponent} from "./shared/components/cart/cart.component";
import {MyForumsComponent} from "./home-page/profile/my-forums/my-forums.component";
import {MyBonusCardsComponent} from "./home-page/profile/my-bonus-cards/my-bonus-cards.component";
import {MyCommentsComponent} from "./home-page/profile/my-comments/my-comments.component";
import {MyBuysComponent} from "./home-page/profile/my-buys/my-buys.component";
import {MyOrdersComponent} from "./home-page/profile/my-orders/my-orders.component";
import {MyProfileComponent} from "./home-page/profile/my-profile/my-profile.component";

const routes: Routes = [
  {path: '', component: SystemComponent, children: [
    {path: 'catalog', component: ProductCatalogComponent},
    {path: 'catalog/:id', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailComponent, children: [
      {path: '', redirectTo: 'comment'},
      {path: 'comment', component: ProductCommentComponent},
      {path: 'description', component: ProductDescriptionComponent}
    ]},
    {path: 'profile', component: ProfileComponent, children: [
      {path: '', redirectTo: 'my_profile'},
      {path: 'my_profile', component: MyProfileComponent},
      {path: 'my_orders', component: MyOrdersComponent},
      {path: 'my_buys', component: MyBuysComponent},
      {path: 'my_comments', component: MyCommentsComponent},
      {path: 'my_bonus_cards', component: MyBonusCardsComponent},
      {path: 'my_forums', component: MyForumsComponent}
    ]},
    {path: 'cart', component: CartComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}

