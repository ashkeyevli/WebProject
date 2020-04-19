import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../provider.service';

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
  constructor(private provider: ProviderService, private router: Router) { }

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
      this.provider.register(this.login, this.password, this.name, this.email).then(res => {
        this.clear();
        this.router.navigate(['/login']);
        alert('You were successfully signed up. Now, please, log in');
      }).catch(res => {
        alert('Something went wrong. Please, try again');
        this.clear();
      });
    }
  }
}
