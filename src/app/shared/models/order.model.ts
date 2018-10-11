import { Client } from './client.model';
import { Product } from './product.model';
import { Transportation } from './transportation.model';
import { StatusOfOrder } from './status-of-order.model';

export class Order {
  constructor(
    public order_ID: number,
    public client: Client,
    public dateOfOrder: string,
    public productList: Product[],
    public sumOfOrder: number,
    public transportation: Transportation,
    public statusOfOrder: StatusOfOrder
  ) {}
}
