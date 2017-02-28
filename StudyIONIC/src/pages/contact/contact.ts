import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {aContactPage} from "./acontact/acontact";
import {bContactPage} from "./_contact/bcontact";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private navCtrl: NavController) {

    }
  onLoadContact(name: string) {
    this.navCtrl.push(aContactPage, {contactName: name})
  }
  onLoadbContact(name: string) {
    this.navCtrl.push(bContactPage, {contactName: name})
  }

}
