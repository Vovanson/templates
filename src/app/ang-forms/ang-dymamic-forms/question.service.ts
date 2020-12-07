import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
   questions: QuestionBase<string>[];

  // TODO: get from a remote source of question metadata
  getQuestions() {

     this.questions = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(this.questions.sort((a, b) => a.order - b.order));
  }

  createQuestions(el) {

    switch(el)
    {
      case 'dropdown': {
        this.questions.push(
          new DropdownQuestion({
            key: 'brave2',
            label: 'Bravery Rating2',
            options: [
              {key: 'solid2',  value: 'Solid2'},
              {key: 'great2',  value: 'Great2'},
              {key: 'good2',   value: 'Good2'},
              {key: 'unproven2', value: 'Unproven2'}
            ],
            order: 5
          })
        );

      }
      break;

      case 'textbox': {
        this.questions.push(
          new TextboxQuestion({
            key: 'lasttName',
            label: 'Last name',
            value: '',
            required: false,
            order: 4
          })
        );
        
      }

    }
    
    console.log(this.questions);


  }


}