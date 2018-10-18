import { Component, OnInit, Input } from '@angular/core';
import { Cookie } from '../../../../../../node_modules/ng2-cookies/ng2-cookies';
import {ClientService} from "../../../../shared/services/client.service";
import {Order} from "../../../../shared/models/order.model";
import {Client} from "../../../../shared/models/client.model";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  @Input() orderList: Order[];
  token: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.token = Cookie.get('Token');
    this.clientService.getClientByToken(this.token).subscribe((client: Client) => {
      this.orderList = client.orderList;
    })
  }

}
