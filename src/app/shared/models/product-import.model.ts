import { Product } from "./product.model";
import { Delivery } from "./delivery.model";

export class ProductImport {
  constructor(
    public productImport_ID: number,
    public product: Product,
    public value: number,
    public delivery: Delivery
  ) {}
}
