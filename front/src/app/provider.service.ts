
import {Injectable} from '@angular/core';
import {IAuthResponse, IDish, IMenu, IOrder} from './model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as moment from 'moment';


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


  // Auth
  auth(login: any, pass: any): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: pass
    });
  }

  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {});
  }

  register(login: any, pass: any, name: any, nEmail: any): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/signup/', {
      username: login,
      password: pass,
      first_name: name,
      email: nEmail
    });
  }
  formatDate(date: Date) {
    return moment(date).format('YYYY-MM-DD');
  }
  post(uri: string, body: any): Promise<any> {
    body = this.normalBody(body);
    return this.http.post(uri, body).toPromise().then(res => res);
  }

  private normalBody(body: any): any {
    if (!body) {
      body = {};
    }
    for (const key in body) {
      if (!body.hasOwnProperty(key)) {
        continue;
      }
      if (body[key] instanceof Date) {
        body[key] = this.formatDate(body[key]);
      }
    }
    return body;
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

  deleteOrder(order: IOrder | number): Observable<IOrder> {
    const id = typeof order === 'number' ? order : order.id;
    return this.http.delete<IOrder>(`api/order/${id}`, this.httpOptions);

  }
  deleteOrders(): Observable<any> {
    return this.http.delete<any>('api/order/', this.httpOptions);

  }
}

  // {this.menuUrl}/${menuId}/$
