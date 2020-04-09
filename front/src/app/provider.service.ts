import {Injectable} from '@angular/core';
import {IAuthResponse, IDish, IMenu} from './model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class ProviderService  {
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


}

  // {this.menuUrl}/${menuId}/$
