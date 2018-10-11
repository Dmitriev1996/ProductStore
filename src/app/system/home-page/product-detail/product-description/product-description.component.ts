import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ProductService} from "../../../../shared/services/product.service";
import {Product} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id =+ params['id'];
      this.productService.getProductById(this.id).subscribe((product: Product) => {
        this.product = product;
      })
    })
  }

}
