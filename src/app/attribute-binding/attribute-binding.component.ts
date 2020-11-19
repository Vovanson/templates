import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actionName = 'Go for it';
  isSpecial = true;
  classExpression = 'special clearance';
  styleExpression = 'color: red';
  color = 'blue';

}
