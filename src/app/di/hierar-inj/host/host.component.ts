import { Component, OnInit, Host, Optional } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  //  provide the service
  providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }]
})
export class HostComponent implements OnInit {

  // use @Host() in the constructor when injecting the service
  constructor( @Optional() public flower?: FlowerService) { }

  // if you take out @Host() and the providers array, flower will be red hibiscus
  ngOnInit(): void {
  }

}
