import { Warehouse } from "./warehouse.model";
import { Product } from "./product.model";

export class ProductUnit {
  constructor(
    public productUnit_ID: number,
    public warehouse: Warehouse,
    public product: Product,
    public value: number
  ) {}
}
