
import {Injectable} from '@angular/core';
import {IAuthResponse, IDish, IMenu, IOrder, LoginResponse} from './model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  private menuUrl = 'http://127.0.0.1:8000/api/menu/';


  getMenu(): Observable<IMenu[]> {
    const url = this.menuUrl;

    return this.http.get<IMenu[]>(url);

  }
  getDishes(menuId: number): Observable<IDish[]> {
    const url = `http://127.0.0.1:8000/api/menu/${menuId}/dishes/`;
    console.log(url);
    console.log(this.http.get(url));
    return this.http.get<IDish[]>(url);
  }

  getDish(dishId: number): Observable<IDish> {
    const url = `http://127.0.0.1:8000/api/dishes/${dishId}/`;
    return this.http.get<IDish>(url);
  }


  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`http://127.0.0.1:8000/api/login/`, {
      username,
      password
    });
  }


  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('http://127.0.0.1:8000/api/orders/');
  }

  // postOrder(dishName: any): Observable<IOrder> {
  //   return this.http.post<IOrder>('api/order', {dish_name: dishName}, this.httpOptions); console.log(dishName);
  //
  // }
  postOrder(dish: IDish): Observable<IOrder> {
    return this.http.post<IOrder>('http://127.0.0.1:8000/api/orders/', dish, this.httpOptions);
  }

  deleteOrder(order: IOrder | number): Observable<IOrder> {
    const id = typeof order === 'number' ? order : order.id;
    return this.http.delete<IOrder>(`http://127.0.0.1:8000/api/orders/${id}`, this.httpOptions);

  }
  deleteOrders(): Observable<any> {
    return this.http.delete<any>('http://127.0.0.1:8000/api/orders/', this.httpOptions);

  }
}

  // {this.menuUrl}/${menuId}/$
