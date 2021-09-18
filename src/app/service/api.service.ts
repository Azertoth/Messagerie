import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private _tabMessage : Array<any>;
  private _tabPersonne : Array<Personne>;
  public emetteur : EventEmitter<any>;

  constructor(private http: HttpClient) {
    this._tabMessage = [];
    this._tabPersonne = [];
    this.emetteur = new EventEmitter<any>();
  }

  get tabMessage(): Array<Message> {
    return this._tabMessage;
  }

  get tabPersonne(): Array<Personne> {
    console.log(this._tabMessage);
    for (let chaqueMessage of this.tabMessage){
      if(this._tabPersonne.indexOf(chaqueMessage.auteur) === 1) {
        this._tabPersonne.push(chaqueMessage.auteur);
      }
    }
    return this._tabPersonne;
  }

  public appelAPI() : Observable<any> {
    return this.http.get("http://10.21.0.254:8080");
  }

  public envoiAPI(message : Message) : Observable<any> {
    return this.http.post ("http://10.21.0.254:8080", message);
  }

  public emission() : void{
    this.appelAPI().subscribe(
      (donnees) => {
        this._tabMessage = donnees;
        this.emetteur.emit(donnees);
      },
    () => console.log("erreur emission")
    );

  }
}
