import {Component, OnInit} from "@angular/core"
import {NavParams} from "ionic-angular";

@Component({
    selector: 'page-acontact',
    templateUrl: 'acontact.html'
})
export class aContactPage implements OnInit{
    name:string;
    constructor (private navParams: NavParams){

    }
    ngOnInit(){
        this.name = this.navParams.get('contactName');
    }
}