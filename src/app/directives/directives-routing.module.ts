import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirDashComponent } from './dir-dash/dir-dash.component';
import { BuiltInComponent } from './built-in/built-in.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';
import { StructurDirComponent } from './structur-dir/structur-dir.component';

const routes: Routes = [
  { path: 'dir-dash', component: DirDashComponent },
  { path: 'built-in', component: BuiltInComponent },
  { path: 'attr-dir', component: AttrDirectivesComponent },
  { path: 'structur-dir', component: StructurDirComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
