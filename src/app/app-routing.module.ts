import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InterpolationComponent} from './interpolation/interpolation.component';
import {TemplateStatementComponent} from './template-statement/template-statement.component'
import {PipesComponent} from './pipes/pipes.component';

const routes: Routes = [
   { path: 'interpolation', component: InterpolationComponent },
   { path: 'template-statement', component: TemplateStatementComponent },
   { path: 'pipes', component: PipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
