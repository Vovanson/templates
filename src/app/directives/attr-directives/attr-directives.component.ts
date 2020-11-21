import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.scss']
})
export class AttrDirectivesComponent implements OnInit {

  color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
