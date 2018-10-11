import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from "../../../shared/models/product.model";
import { Comment } from "../../../shared/models/comment.model";
import { Cookie } from '../../../../../node_modules/ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  saleList: string[] = [];
  id: number;
  tmp: string;

  constructor(private productService: ProductService,
              public route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id =+ params['id'];
      this.productService.getProductById(this.id)
        .subscribe((product: Product) => {
          this.product = product;
        })
    })
    //console.log(this.route.snapshot.pathFromRoot);
  }

  addToCart() {
    this.tmp = Cookie.get('saleList');
    console.log(this.tmp);
    if(this.tmp !== null){
      this.saleList = this.tmp.split(' ');
    }
    console.log(this.saleList.toLocaleString);
    this.saleList.push(this.product.product_ID.toString());
    Cookie.set('saleList', this.saleList.toString());
  }

}
