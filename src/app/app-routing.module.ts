import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InterpolationComponent} from './interpolation/interpolation.component';
import {TemplateStatementComponent} from './template-statement/template-statement.component'
import {PipesComponent} from './pipes/pipes.component';
import {BindingSyntaxComponent} from './binding-syntax/binding-syntax.component';
import {PropetyBindingComponent} from './propety-binding/propety-binding.component';
import {AttributeBindingComponent} from './attribute-binding/attribute-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {TwoWayBindingComponent} from './two-way-binding/two-way-binding.component';

const routes: Routes = [
   { path: 'interpolation', component: InterpolationComponent },
   { path: 'template-statement', component: TemplateStatementComponent },
   { path: 'pipes', component: PipesComponent },
   { path: 'binding-syntax', component: BindingSyntaxComponent },
   { path: 'propety-binding', component: PropetyBindingComponent },
   { path: 'attribute-binding', component: AttributeBindingComponent },
   { path: 'event-binding', component: EventBindingComponent },
   { path: 'two-way-binding', component: TwoWayBindingComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
