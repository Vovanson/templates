import { Component, OnInit } from '@angular/core';
import { FlowerService } from './flower.service';
import { LeafService } from './leaf.service';

@Component({
  selector: 'app-hierar-inj',
  templateUrl: './hierar-inj.component.html',
  styleUrls: ['./hierar-inj.component.scss']
})
export class HierarInjComponent implements OnInit {

  name = 'Angular';
  constructor(public flower: FlowerService, public leaf: LeafService) {}

  ngOnInit(): void {
  }

}
