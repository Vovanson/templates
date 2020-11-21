import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  manufactureDate: Date;
  color?: string | null;
  price: number;
}

@Component({
  selector: 'app-templ-exrp-operator',
  templateUrl: './templ-exrp-operator.component.html',
  styleUrls: ['./templ-exrp-operator.component.scss']
})
export class TemplExrpOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Template Expression Operators';

  item: Item = {
    name : 'Telephone',
    manufactureDate : new Date(1980, 1, 25),
    color: 'orange',
    price: 98,
  };

  nullItem = null;

}
