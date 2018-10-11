import { City } from "./city.model";
import { TypeShop } from "./type-shop.model";
import { Warehouse } from "./warehouse.model";

export class Shop {
  constructor(
    public shop_ID: number,
    public typeShop: TypeShop,
    public city: City,
    public adress: string,
    public phone: string,
    public email: string,
    public warehouse: Warehouse
  ) {}
}
