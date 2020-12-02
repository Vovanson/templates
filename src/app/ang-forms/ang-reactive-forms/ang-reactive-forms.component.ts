import { Component, OnInit } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-ang-reactive-forms',
  templateUrl: './ang-reactive-forms.component.html',
  styleUrls: ['./ang-reactive-forms.component.scss']
})
export class AngReactiveFormsComponent implements OnInit {

  editor: EditorType = 'name';

  constructor() { }

  ngOnInit(): void {
  }

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
