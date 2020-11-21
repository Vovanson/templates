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

    // trackBy change counting
    itemsNoTrackByCount   = 0;
    itemsWithTrackByCount = 0;
    itemsWithTrackByCountReset = 0;
    itemIdIncrement = 1;

  constructor() { }

  ngOnInit(): void {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
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

  resetList() {
    this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    this.nullCustomer = 'Kelly';
  }

  changeIds() {
    this.items.forEach(i => i.id += 1 * this.itemIdIncrement);
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }

  clearTrackByCounts() {
    this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }

  trackByItems(index: number, item: Item): number { return item.id; }

}
