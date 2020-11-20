import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { BuiltInComponent } from './built-in/built-in.component';
import { DirDashComponent } from './dir-dash/dir-dash.component';


@NgModule({
  declarations: [BuiltInComponent, DirDashComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
