import { Injectable } from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _tabMessage : Array<Message>;
  private _tabPersonne : Array<Personne>;

  constructor(private http: HttpClient) {
    this._tabMessage = [];
    this._tabPersonne = [];
  }

  get tabMessage(): Array<Message> {
    return this._tabMessage;
  }

  set tabMessage(value: Array<Message>) {
    this._tabMessage = value;
  }

  get tabPersonne(): Array<Personne> {
    for (let chaqueMessage of this.tabMessage){
      if(this._tabPersonne.indexOf(chaqueMessage.auteur) === 1) {
        this._tabPersonne.push(chaqueMessage.auteur);
      }
    }
    return this._tabPersonne;
  }

  set tabPersonne(value: Array<Personne>) {
    this._tabPersonne = value;
  }

  public appelAPI() : Observable<any> {
    return this.http.get("https://api.chucknorris.io/jokes/random");
  }

}
