import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product} from "../../../../shared/models/product.model";
import {ProductService} from "../../../../shared/services/product.service";
import {Comment} from "../../../../shared/models/comment.model";

@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.css']
})
export class ProductCommentComponent implements OnInit {

  comments: Comment[];
  id: number;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id =+ params['id'];
      this.productService.getProductById(this.id)
        .subscribe((product: Product) => {
          this.comments = product.commentList;
        })
    })
  }

}
