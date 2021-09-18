import { Component, OnInit } from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {APIService} from "../service/api.service";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {

  nom : String;
  textMessage : String;
  message : Message;
  tabMessage : Array<Message>;

  constructor(private msg : APIService) {
    this.nom = '';
    this.textMessage = '';
    this.tabMessage = [];
    this.message = new Message(new Personne( ""), new Date(), "", "");
 /*   let m1 = new Message(new Personne("Azertoth"), new Date(), "youpi ca remarche", "id-quelconque");
    this.msg.envoiAPI(m1).subscribe();*/
  }

  envoyer(valeurDuForm : any){
    this.message = new Message(new Personne(valeurDuForm.nom), new Date(), valeurDuForm.textMessage, "");
    console.log(this.message);
    this.msg.envoiAPI(this.message).subscribe();
    this.msg.emission();
    this.msg.appelAPI().subscribe(
      (e : any)=> {this.tabMessage = e; console.log(this.tabMessage)},
      () => console.log("ca marche pas")
    );
  }

  annuler(valeurDuForm : any){
    valeurDuForm.nom = "";
    valeurDuForm.textMessage = "";
  }

  ngOnInit(): void {
  }

}
