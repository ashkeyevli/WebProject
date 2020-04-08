import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public login = '';
  public password = '';
  public confirm = '';
  public name = '';
  public email = '';
  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.login = '';
    this.password = '';
    this.confirm = '';
    this.name = '';
    this.email = '';
  }
  signup() {
    if (!this.login || !this.password || !this.confirm) {
      alert('Please, write your login and password!');
      this.clear();
    } else if (this.password !== this.confirm) {
      alert('Passwords do not match. Try again, please!');
      this.clear();
    } else {
      alert('You were successfully logged in. Now log in our system.');
    }
  }
}
