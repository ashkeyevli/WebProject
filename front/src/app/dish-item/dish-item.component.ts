import { Component, OnInit } from '@angular/core';
import {IDish, IMenu, IOrder} from '../model';
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
  order: IOrder[];
  logged = false;

  constructor(private providerService: ProviderService,
              private route: ActivatedRoute,
              private location: Location)
  { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
    this.getDish();
  }

  getDish(): void {
    const dishid = +this.route.snapshot.paramMap.get('dishId');
    this.providerService.getDish(dishid).subscribe(dish => {this.dish = dish; console.log(this.dish); } );

  }
  back(): void {
    this.location.back();
  }
   // postOrder(dish: IDish) {
   //
   //  this.providerService.postOrder(dish).subscribe(dishItem => {this.order});
   //  }

  postOrder(name: string, price: number, imageUrl: string, count: number): void {
    count = this.dish.count;

    // name = name.trim();
    // price = price;
    // if (!name) {return; }
    this.providerService.postOrder({name, price, imageUrl, count} as IDish)
      .subscribe(dish =>  {this.order.push(dish); console.log(dish); });
    window.alert('Your product has been added to the cart!');
  }




}
