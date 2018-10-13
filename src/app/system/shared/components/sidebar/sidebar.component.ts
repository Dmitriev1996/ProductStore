import { Component, OnInit } from '@angular/core';
import { TypeProductService } from '../../../../shared/services/type-product.service';
import { TypeProduct } from "../../../../shared/models/type-product.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  typeProducts: TypeProduct[];

  constructor(private typeProductService: TypeProductService) { }

  ngOnInit() {
    this.typeProductService.getTypeProducts().subscribe((typeProducts: TypeProduct[]) => {
      this.typeProducts = typeProducts;
    });
    console.log(this.typeProducts)
  }

}
