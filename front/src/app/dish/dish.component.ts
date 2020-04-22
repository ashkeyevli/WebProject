import {Component, Input, OnInit} from '@angular/core';
import {IDish, IMenu} from '../model';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  dishes: IDish[];
  menu: IMenu[];
  logged = false;

  public  menuId = +this.route.snapshot.paramMap.get('id');

  constructor(private providerService: ProviderService,
              private route: ActivatedRoute) { }

  getDishes(): void {

  console.log(this.menuId);
  this.providerService.getDishes(this.menuId).subscribe
  (dishes => {this.dishes = dishes; console.log(this.dishes); } );

  }


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.logged = true;
      this.getDishes();
    }

  }

}
