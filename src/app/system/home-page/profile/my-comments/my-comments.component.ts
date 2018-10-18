import { Component, OnInit, Input } from '@angular/core';
import { Cookie } from '../../../../../../node_modules/ng2-cookies/ng2-cookies';
import {Comment} from "../../../../shared/models/comment.model";
import {ClientService} from "../../../../shared/services/client.service";
import {Client} from "../../../../shared/models/client.model";

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {

  @Input() commentList: Comment[];
  token: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.token = Cookie.get('Token');
    this.clientService.getClientByToken(this.token).subscribe((client: Client) => {
      this.commentList = client.commentList;
    })
  }

}
