import { Component, OnInit } from '@angular/core';
import {APIService} from "../service/api.service";
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tabPersonne : Array<Personne>;

  constructor(private api : APIService) {
    this.tabPersonne = [];
    this.tabPersonne = this.api.tabPersonne;

  }

  ngOnInit(): void {
  }



}
