import { Component, OnInit } from '@angular/core';

import { FlowerService } from './flower.service';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-i-o',
  templateUrl: './i-o.component.html',
  styleUrls: ['./i-o.component.scss']
})
export class IOComponent implements OnInit {

  constructor(public flower: FlowerService,
    public animal: AnimalService) { }

  ngOnInit(): void {
  }

}
