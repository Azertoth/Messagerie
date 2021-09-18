import {Component, OnInit} from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {MessageService} from "../service/message.service";
import {APIService} from "../service/api.service";


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  tabMessage: Array<Message>;


  constructor(private svc: MessageService, private api: APIService) {
    // this.tabMessage = this.svc.tabMessage;

    this.tabMessage = [];
    this.api.appelAPI().subscribe(
      (e) => {
        this.tabMessage = e;
        console.log(e);
      },
      (erreur) => console.log(erreur)
    );
    console.log(this.tabMessage);
  }

  ngOnInit(): void {
  }

}
