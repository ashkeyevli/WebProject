export interface IDish {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  menu: number;
  count: number;

}
export interface IMenu {
  id: number;
  name: string;
  image_url_menu: string;
}

export interface IAuthResponse {
  token: string;
  is_admin: boolean;
  name: string;
  
export interface IOrder {
id: number;
name: string;
imageUrl: string;
price: number;
count: number;

}
