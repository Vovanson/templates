import { Component, OnInit } from '@angular/core';
import { Item } from './item';


@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.scss']
})
export class BuiltInComponent implements OnInit {

  canSave =  true;
  isSpecial = true;
  isUnchanged = true;

  currentClasses: {};
  currentStyles: {};


  item: Item; // defined to demonstrate template context precedence
  items: Item[];
  currentItem: Item;

  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: 'Laura'
  };

  constructor() { }

  ngOnInit(): void {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }

  resetItems() {
    this.items = Item.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    this.nullCustomer = 'Kelly';
  }

}
