import { Component, OnInit, SkipSelf } from '@angular/core';
import { LeafService } from '../leaf.service';
// Angular would ignore this LeafService instance


@Component({
  selector: 'app-skipself',
  templateUrl: './skipself.component.html',
  styleUrls: ['./skipself.component.scss'],
  providers: [{ provide: LeafService, useValue: { emoji: '🍁' } }]
})
export class SkipselfComponent implements OnInit {

  // Use @SkipSelf() in the constructor
  constructor(@SkipSelf() public leaf: LeafService) { }

  
// @SkipSelf(): Specifies that the dependency resolution should start from the parent injector, not here.
  ngOnInit(): void {
  }

}
