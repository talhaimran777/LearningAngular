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
    if (isNaN(this.state.length)) {
      this.lengthError = true;
      this.errorMessage = 'Length has to be a number!';
    }

    if (this.state.length < 3 || this.state.length > 10) {
      this.errorMessage =
        'Password must be at least 3 characters and less than 10 characters';
      this.lengthError = true;
    }
  };

  onChange = (e: any) => {
    let value: number;
    if (this.lengthError) {
      this.errorMessage = '';
      this.lengthError = false;
    }

    this.state.length = parseInt(e.target.value);
  };

  generatePassword = () => {
    this.state.password = '';

    let numbers = '123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let symbols = '!@#$%^&*()';
    let possibleCharactersForPassword = '';

    this.checkLength();
    if (this.lengthError === false) {
      this.zeroChecks = this.zeroCheck();

      if (this.zeroChecks === false) {
        //console.log('Password was generated successfully!');

        if (this.state.enableNumbers) {
          possibleCharactersForPassword += numbers;
        }

        if (this.state.enableLetters) {
          possibleCharactersForPassword += letters;
        }

        if (this.state.enableSymbols) {
          possibleCharactersForPassword += symbols;
        }

        for (let i = 0; i < this.state.length; i++) {
          const index = Math.floor(
            Math.random() * possibleCharactersForPassword.length
          );

          this.state.password += possibleCharactersForPassword[index];
        }

        console.log(this.state.password);
      }
    }
  };
}
