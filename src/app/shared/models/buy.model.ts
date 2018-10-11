import { Client } from './client.model';
import { Product } from './product.model';

export class Buy {
  constructor(
    public buy_ID: number,
    public dateBuy: string,
    public productList: Product[],
    public sumBuy: number,
    public client: Client
  ) {}
}
