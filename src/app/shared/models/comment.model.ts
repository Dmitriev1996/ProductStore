import { Client } from './client.model';
import { Product } from './product.model';

export class Comment {
  constructor(
    public comment_ID: number,
    public comment: string,
    public client: Client,
    public product: Product
  ) {}
}
