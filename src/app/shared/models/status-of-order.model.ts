import { Order } from './order.model';
export class StatusOfOrder {
  constructor(
    public status_ID: number,
    public status: string,
    public orderList: Order[]
  ) {}
}
