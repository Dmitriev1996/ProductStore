import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../../../shared/models/product.model";
import { ProductService } from "../../../../shared/services/product.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TypeProductService } from "../../../../shared/services/type-product.service";
import {TypeProduct} from "../../../../shared/models/type-product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  id: number;
  @Input() products: Product[];

  constructor(private typeProductService: TypeProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.route.params.subscribe((params: Params) => {
      this.id =+ params['id'];
      this.typeProductService.getTypeProductById(this.id)
        .subscribe((typeProduct: TypeProduct) => {
          this.products = typeProduct.productList;
        })
    })
  }

}
