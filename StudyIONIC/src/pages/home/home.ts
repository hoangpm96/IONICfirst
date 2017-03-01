import { Component } from '@angular/core';
import {ContactPage} from "../contact/contact";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cntPage = ContactPage;

}
