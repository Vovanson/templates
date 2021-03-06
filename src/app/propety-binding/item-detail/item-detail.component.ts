import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() childItem: string;

  currentItem = 'bananas in boxes';

  constructor() { }

  ngOnInit(): void {
  }

}
