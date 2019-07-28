import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
       apiKey: "AIzaSyDKUhcSQ5t_2lHNlMOvOtfIhCmNY-NO0lI",
       authDomain: "ng-recipe-book-fe8ff.firebaseapp.com"
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
