import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, SelectMultipleControlValueAccessor } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';
  elForm = [
    'dropdown',
    'textbox'
  ];
  element = null;

  constructor(private qcs: QuestionControlService,
    private qs: QuestionService
    ) { }

  ngOnInit(){
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  addField(el:string) {
    this.qs.createQuestions(el);
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(el);

  }

}
