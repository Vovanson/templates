import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirDashComponent } from './dir-dash/dir-dash.component';
import { BuiltInComponent } from './built-in/built-in.component';

const routes: Routes = [
  { path: 'dir-dash', component: DirDashComponent },
  { path: 'built-in', component: BuiltInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
