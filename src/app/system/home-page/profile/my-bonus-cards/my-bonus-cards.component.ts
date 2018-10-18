import { Component, OnInit, Input } from '@angular/core';
import { Cookie } from '../../../../../../node_modules/ng2-cookies/ng2-cookies';
import {ClientService} from "../../../../shared/services/client.service";
import {BonusCard} from "../../../../shared/models/bonus-card.model";
import {Client} from "../../../../shared/models/client.model";

@Component({
  selector: 'app-my-bonus-cards',
  templateUrl: './my-bonus-cards.component.html',
  styleUrls: ['./my-bonus-cards.component.css']
})
export class MyBonusCardsComponent implements OnInit {

  @Input() bonusCard: BonusCard;
  token: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.token = Cookie.get('Token');
    this.clientService.getClientByToken(this.token).subscribe((client: Client) => {
      this.bonusCard = client.bonusCard;
    })
  }

}
