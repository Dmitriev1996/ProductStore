import { Order } from "./order.model";


export class Transportation {
  constructor(
    public transportation_ID: number,
    //public transportationType: TransportationType,
    //public adress: Adress,
    public order: Order
  ) {}
}
