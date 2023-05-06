import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

    aboutmeclicked: boolean = false;
    projectsclicked: boolean = false;
    contactclicked: boolean = false;


 btnclick() {
  this.aboutmeclicked = !this.aboutmeclicked
 }

 theclick() {
  this.projectsclicked = !this.projectsclicked
 }

 onclick() {
  this.contactclicked = !this.contactclicked
 }
}
