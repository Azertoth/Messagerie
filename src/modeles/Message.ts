import {Personne} from "./Personne";

export class Message{
  public auteur: Personne;
  public dateMessage: Date;
  public textMessage: String;
  public uuid: String;

  constructor(auteur: Personne, dateMessage: Date, textMessage: String, uuid: String) {
    this.auteur = auteur;
    this.dateMessage = dateMessage;
    this.textMessage = textMessage;
    this.uuid = uuid;
  }

}
