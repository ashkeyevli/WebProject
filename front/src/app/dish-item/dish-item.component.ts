import { Component, OnInit } from '@angular/core';
import {IDish, IMenu} from '../model';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {
dish: IDish;
  constructor(private providerService: ProviderService,
              private route: ActivatedRoute,
              private location: Location) { }
   getDish(): void {
     const dishid = +this.route.snapshot.paramMap.get('dishId');
     this.providerService.getDish(dishid).subscribe(dish => {this.dish = dish; console.log(this.dish); } );

   }
   back(): void {
     this.location.back();
   }

  ngOnInit(): void {
    this.getDish();
  }

}
