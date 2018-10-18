import { Component, OnInit, Input } from '@angular/core';
import {ClientService} from "../../../../shared/services/client.service";
import { Cookie } from '../../../../../../node_modules/ng2-cookies/ng2-cookies';
import {Buy} from "../../../../shared/models/buy.model";
import {Client} from "../../../../shared/models/client.model";

@Component({
  selector: 'app-my-buys',
  templateUrl: './my-buys.component.html',
  styleUrls: ['./my-buys.component.css']
})
export class MyBuysComponent implements OnInit {

  @Input() buyList: Buy[];
  token: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.token = Cookie.get('Token');
    this.clientService.getClientByToken(this.token).subscribe((client: Client) => {
      this.buyList = client.buyList;
    });
  }

}
