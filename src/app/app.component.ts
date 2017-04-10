import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDxWvGsh--5WuTJW8Qc9K29Js-PNGrROLk',
      authDomain: 'ng-recipe-book-a9aed.firebaseapp.com'
    });
  }
}
