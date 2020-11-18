import { Component, OnInit } from '@angular/core';

import { Hero } from '../items/hero';

@Component({
  selector: 'app-template-statement',
  templateUrl: './template-statement.component.html',
  styleUrls: ['./template-statement.component.scss']
})
export class TemplateStatementComponent implements OnInit {

  alert(msg?: string)      { window.alert(msg); }
  heroes: Hero[];

  ngOnInit(): void {
    this.resetHeroes();
  }


  deleteHero(hero?: Hero) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}.`);
    console.log(this.heroes);
  }

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    this.alert('Saved.' + evtMsg);
  }

  onSubmit(data: any) {    }

    // updates with fresh set of cloned heroes
    resetHeroes() {
      this.heroes = Hero.heroes.map(hero => hero.clone());
    }

}
