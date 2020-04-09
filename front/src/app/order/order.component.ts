import { Component, OnInit } from '@angular/core';
import {IDish, IOrder} from '../model';
import {ProviderService} from '../provider.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orders: IOrder[];
  public dishOrder: IDish;


  public empty = true;
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.getOrders();
    }

  getOrders() {
    this.providerService.getOrders().subscribe(res => {this.orders = res; console.log(this.orders); });

  }
  deleteOrder(order: IOrder) {
    this.orders = this.orders.filter(h => h !== order);
    this.providerService.deleteHero(order).subscribe();


  }


}
