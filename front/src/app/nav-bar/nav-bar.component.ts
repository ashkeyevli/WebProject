import { Component, OnInit } from '@angular/core';
import {IMenu} from '../model';
import {ProviderService} from '../provider.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  menu: IMenu[] = [];
  logged = false;
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.getMenu().subscribe(menu => {this.menu = menu; } );
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  logout(){
    localStorage.clear();
    this.logged = false;
    window.location.reload();
  }

}
