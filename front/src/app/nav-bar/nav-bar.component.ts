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
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.getMenu().subscribe(menu => {this.menu = menu; } );
  }

}
