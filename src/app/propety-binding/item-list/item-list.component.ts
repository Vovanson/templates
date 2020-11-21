import { Component, OnInit, Input } from '@angular/core';
import { CUSTOMERS } from '../../items/customers';
import { Customer } from '../../items/customer';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listItems = CUSTOMERS;
  @Input() items: Customer[];

}
