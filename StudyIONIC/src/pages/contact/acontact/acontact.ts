import {Component, OnInit} from "@angular/core"
import {NavParams, NavController} from "ionic-angular";

@Component({
    selector: 'page-acontact',
    templateUrl: 'acontact.html'
})
export class aContactPage implements OnInit{
    name:string;
    constructor (private navParams: NavParams, private navCtrl: NavController){

    }
    ngOnInit(){
        this.name = this.navParams.get('contactName');
    }
    GoToHome(){
      this.navCtrl.popToRoot();
    }
}
