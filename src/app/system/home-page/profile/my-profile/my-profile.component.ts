import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Client} from "../../../../shared/models/client.model";
import {ClientService} from "../../../../shared/services/client.service";
import { Cookie } from '../../../../../../node_modules/ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  @Input() client: Client;
  token: string;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService) { }

  ngOnInit() {
    this.token = Cookie.get('Token');
    this.clientService.getClientByToken(this.token).subscribe((client: Client) => {
      this.client = client;
    });
  }

}
