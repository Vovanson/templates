import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propety-binding',
  templateUrl: './propety-binding.component.html',
  styleUrls: ['./propety-binding.component.scss']
})
export class PropetyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemImageUrl = '../assets/fish.jpeg';
  isUnchanged = true;
  classes = 'special';
  parentItem = 'lamp';

  currentItems = [{
    id: 21,
    name: 'phone'
  }];

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';

}
