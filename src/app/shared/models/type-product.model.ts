import { Product } from "./product.model";

export class TypeProduct {
  constructor(
    public typeProduct_ID: number,
    public typeProduct: string,
    public productList: Product[]
  ) {}
}
