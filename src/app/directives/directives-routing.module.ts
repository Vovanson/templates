import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirDashComponent } from './dir-dash/dir-dash.component';

const routes: Routes = [
  { path: 'dir-dash', component: DirDashComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
