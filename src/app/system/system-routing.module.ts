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

const routes: Routes = [
  {path: '', component: SystemComponent, children: [
    {path: 'catalog', component: ProductCatalogComponent},
    {path: 'catalog/:id', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailComponent, children: [
      {path: '', redirectTo: 'comment'},
      {path: 'comment', component: ProductCommentComponent},
      {path: 'description', component: ProductDescriptionComponent}
    ]},
    {path: 'profile', component: ProfileComponent},
    {path: 'cart', component: CartComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}

