import { Injectable } from '@angular/core';
import {IDish, IMenu, IOrder} from './model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {

  }

  private menuUrl = 'api/menu';


  getMenu(): Observable<IMenu[]> {
    const url = this.menuUrl;

    return this.http.get<IMenu[]>(url);

  }

  // getDishes(restaurantId: string): Promise<IDish[]> {
  //   return this.get(`http://localhost:8000/api/restaurants/${restaurantId}/dishes/`, {});
  // }
  // getDishes(menuId: number): Promise<IDish[]> {
  //   // const url = `${this.menuUrl}/${menuId}`;
  //   return this.get(`${this.menuUrl}/${menuId}/dishes`, {});
  // }
// getDishes(menuId: number): Observable<IDish[]> {
//     return this.get(`menu/${menuId}/dishes`, {});
// }


  // getMenuItem(menuId: number): Observable<IMenu> {
  //   const url = `${this.menuUrl}/${menuId}`;
  //   return this.http.get<IMenu>(url);
  // }
  getDishes(menuId: number): Observable<IDish[]> {
    const url = `${menuId}/dishes`;
    console.log(url);
    console.log(this.http.get(url));
    return this.http.get<IDish[]>(url);


  }

  getDish(dishId: number): Observable<IDish> {
    const url = `api/dishes/${dishId}`;
    return this.http.get<IDish>(url);
  }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('api/order');
  }

  // postOrder(dishName: any): Observable<IOrder> {
  //   return this.http.post<IOrder>('api/order', {dish_name: dishName}, this.httpOptions); console.log(dishName);
  //
  // }
  postOrder(dish: IDish): Observable<IOrder> {
    return this.http.post<IOrder>('api/order', dish, this.httpOptions);
  }

  deleteHero(order: IOrder | number): Observable<IOrder> {
    const id = typeof order === 'number' ? order : order.id;
    return this.http.delete<IOrder>(`api/order/${id}`, this.httpOptions);

  }
}

  // {this.menuUrl}/${menuId}/$
