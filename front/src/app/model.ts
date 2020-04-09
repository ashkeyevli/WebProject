export interface IDish {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description: string;
  menu: number;

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
}
