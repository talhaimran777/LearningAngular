import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  changedString: string;
  enteredString: string;
  constructor() {
    this.changedString = '';
    this.enteredString = '';
  }

  onChange = (e: any) => {
    this.enteredString = e.target.value;
  };

  onClick = (e: any) => {
    this.changedString = this.enteredString.toUpperCase();
  };
}
