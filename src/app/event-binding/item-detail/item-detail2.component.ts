import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail2',
  templateUrl: './item-detail2.component.html',
  styleUrls: ['./item-detail2.component.scss']
})
export class ItemDetail2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input() item: any;
  lineThrough = '';

  // This component makes a request but it can't actually delete a hero.
  @Output() deleteRequest = new EventEmitter<Item>();

  delete() {
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
