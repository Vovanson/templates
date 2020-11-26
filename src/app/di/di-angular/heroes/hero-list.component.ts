import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { heroServiceProvider } from './hero.service.provider';

@Component({
  selector: 'app-hero-list',
  providers: [ heroServiceProvider ],
  template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
`
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];

  constructor(heroService: HeroService) { 

    this.heroes = heroService.getHeroes();
  }

  ngOnInit(): void {
  }

  
}
