import { Component, OnInit } from '@angular/core';
import {Client} from "../../../shared/models/client.model";
import {ClientService} from "../../../shared/services/client.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
