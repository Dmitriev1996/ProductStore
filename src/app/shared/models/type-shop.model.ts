import { Shop } from "./shop.model";

export class TypeShop {
  constructor(
    public typeShop_ID: number,
    public typeShop: string,
    public shopList: Shop[]
  ) {}
}
