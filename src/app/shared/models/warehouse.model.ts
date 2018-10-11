import { Shop } from "./shop.model";
import { Delivery } from "./delivery.model";
import { ProductUnit } from "./product-unit.model";

export class Warehouse {
  constructor(
    public warehouse_ID: number,
    public shop: Shop,
    public deliveryList: Delivery[],
    public productUnitList: ProductUnit[]
  ) {}
}
