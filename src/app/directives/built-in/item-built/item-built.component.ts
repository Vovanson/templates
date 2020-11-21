import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';


@Component({
  selector: 'app-item-built',
  templateUrl: './item-built.component.html',
  styleUrls: ['./item-built.component.scss']
})
export class ItemBuiltComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
