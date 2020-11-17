import { Component, OnInit } from '@angular/core';

import { CUSTOMERS } from '../items/customers';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  customers = CUSTOMERS;

  currentCustomer = 'Lucas';
  title = "Product";
  itemImageUrl = '../assets/fish.jpeg';

  recommended = 'You might also like:';
  itemImageUrl2 = '../assets/new.jpg';


  ngOnInit(): void {
  }

  getVal(): number { return 2; }

}
