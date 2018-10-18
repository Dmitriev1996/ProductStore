import { Component, OnInit, Input } from '@angular/core';
import { Cookie } from '../../../../../../node_modules/ng2-cookies/ng2-cookies';
import {ClientService} from "../../../../shared/services/client.service";
import {Forum} from "../../../../shared/models/forum.model";
import {Client} from "../../../../shared/models/client.model";

@Component({
  selector: 'app-my-forums',
  templateUrl: './my-forums.component.html',
  styleUrls: ['./my-forums.component.css']
})
export class MyForumsComponent implements OnInit {

  @Input() forumList: Forum[];
  token: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.token = Cookie.get('Token');
    this.clientService.getClientByToken(this.token).subscribe((client: Client) => {
      this.forumList = client.forumList;
    });
  }

}
