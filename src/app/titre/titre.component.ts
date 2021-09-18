import { Component, OnInit } from '@angular/core';
import {MessageService} from "../service/message.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit {
  blague : String;

  constructor(private msg: MessageService) {
    this.blague = "";
    this.msg.appelAPI().subscribe(
      (donnees) => this.blague = donnees.value,
      () => console.log("ca passe pas"),
      () => console.log("ca passe toujours")
    );
  }

  ngOnInit(): void {
  }

}
