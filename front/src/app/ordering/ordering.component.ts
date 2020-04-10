import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {

  constructor() { }
save() {
  window.alert('Your ordering finished!');
}
  ngOnInit(): void {
  }

}
