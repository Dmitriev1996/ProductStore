import { Comment } from './comment.model';
import { TypeProduct } from "./type-product.model";

export class Product {
  constructor(
    public product_ID: number,
    public nameOfProduct: string,
    public articul: string,
    public price: number,
    public typeProduct: TypeProduct,
    public mass: number,
    public description: string,
    public picture: Uint8Array,
    public commentList: Comment[]
  ) {}
}
