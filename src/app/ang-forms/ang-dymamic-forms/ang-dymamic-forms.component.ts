import { Component, OnInit } from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ang-dymamic-forms',
  templateUrl: './ang-dymamic-forms.component.html',
  styleUrls: ['./ang-dymamic-forms.component.scss'],
  providers:  [QuestionService]
})
export class AngDymamicFormsComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
   }

  ngOnInit(): void {
  }

}
