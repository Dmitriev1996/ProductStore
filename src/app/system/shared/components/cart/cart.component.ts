import { Component, OnInit } from '@angular/core';
import { Cookie } from '../../../../../../node_modules/ng2-cookies/ng2-cookies';
import {ProductService} from "../../../../shared/services/product.service";
import {ActivatedRoute} from '@angular/router';
import {Product} from "../../../../shared/models/product.model";
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  list: string[];
  tmp: string='';
  products: Product[] = [];
  item: string;
  i: number;
  sum: number = 0;
  collection: HTMLCollectionOf<Element>;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.cart();
  }

  cart() {
    this.tmp = Cookie.get('saleList');
    if(this.tmp !== null) {
      this.list = this.tmp.split(',');
      for(var i=0, len=this.list.length; i<len; i++) {
        this.productService.getProductById(Number.parseInt(this.list[i]))
          .subscribe((product: Product) => {
            this.products.push(product);
            this.sum += product.price;
          });
      }
    }
  }

  deleteProduct() {
     this.collection = document.getElementsByClassName('product_row');
     for(var i=0, len=this.collection.length; i<len; i++) {
       //console.log(this.collection.item(i));
       console.log(this.collection.item(i)
         .getElementsByClassName('check').item(1).valueOf());
       //console.log(this.collection.item(i).getElementsByClassName('iteration'));
     }

  }

}
