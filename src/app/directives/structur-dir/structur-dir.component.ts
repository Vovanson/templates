import { Component, OnInit } from '@angular/core';

import { Hero, heroes } from './hero';

@Component({
  selector: 'app-structur-dir',
  templateUrl: './structur-dir.component.html',
  styleUrls: ['./structur-dir.component.scss']
})
export class StructurDirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes = heroes;
  hero = this.heroes[0];

  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number { return hero.id; }

}
