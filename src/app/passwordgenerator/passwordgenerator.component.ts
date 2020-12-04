import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwordgenerator',
  templateUrl: './passwordgenerator.component.html',
  styleUrls: ['./passwordgenerator.component.css'],
})
export class PasswordgeneratorComponent implements OnInit {
  state: any;
  zeroChecks: boolean;
  lengthError: boolean;
  errorMessage: string;
  constructor() {
    this.state = {
      enableLetters: false,
      enableNumbers: false,
      enableSymbols: false,
      length: 0,
      password: '',
    };

    this.zeroChecks = false;
    this.errorMessage = '';
    this.lengthError = false;
  }

  ngOnInit(): void {}

  zeroCheck = () => {
    if (
      this.state.enableNumbers === false &&
      this.state.enableSymbols === false &&
      this.state.enableLetters === false
    ) {
      this.errorMessage = 'At least check one of the boxes!';
      return true;
    } else {
      return false;
    }
  };
  onClick = (e: any) => {
    if (this.state[e.target.name] !== true) {
      this.state[e.target.name] = true;
      this.zeroChecks = false;

      if (!this.lengthError) {
        this.errorMessage = '';
      }
    } else {
      this.state[e.target.name] = false;
    }
  };

  checkLength = () => {
    if (this.state.password.length < 3 || this.state.length > 10) {
      this.errorMessage =
        'Password must be at least 3 characters and less than 10 characters';
      this.lengthError = true;
    }
  };

  onChange = (e: any) => {
    if (this.lengthError) {
      this.errorMessage = '';
      this.lengthError = false;
    }
    this.state.password = e.target.value;
  };

  generatePassword = () => {
    this.checkLength();
    if (this.lengthError === false) {
      this.zeroChecks = this.zeroCheck();
    }
  };
}
