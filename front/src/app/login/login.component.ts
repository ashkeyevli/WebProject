import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login = '';
  public password = '';
  logged = false;

  constructor(private provider: ProviderService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      window.location.replace('http://localhost:4200/menu');
    }
  }

  clear() {
    this.login = '';
    this.password = '';
  }

  auth() {
    if (!this.login || !this.password) {
      alert('Please, fill all linws');
      this.clear();
    } else if (this.login && this.password) {
      this.provider.login(this.login, this.password).subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', this.login);
        this.logged = true;
        this.clear();
        alert('You logged in successfully!');
        window.location.replace(`http://localhost:4200/menu`);
      });
    } else {
      alert('Wrong login or password! Try again!');
    }
  }


}

