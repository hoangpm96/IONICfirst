import {Component, OnInit} from "@angular/core"
import  { NavParams } from "ionic-angular"

@Component ({
  selector: 'page-bcontact',
  templateUrl: 'bcontact.html'
})
export class bContactPage implements OnInit{
  name: string;
  constructor (private navParams: NavParams){

  }
ngOnInit(){
    this.name = this.navParams.get('contactName')
}
}

