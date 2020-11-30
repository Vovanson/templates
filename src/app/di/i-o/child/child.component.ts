import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
   // provide services
   providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }],
   // using viewProviders means AnimalService is available in <#VIEW>
   viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }]
  
})
export class ChildComponent implements OnInit {

  constructor(public flower: FlowerService,
    public animal: AnimalService) { }

  ngOnInit(): void {
  }

}
