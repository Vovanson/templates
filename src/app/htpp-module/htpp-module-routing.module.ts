import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpCompComponent } from './http-comp/http-comp.component';

const routes: Routes = [
  { path: 'http', component: HttpCompComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtppModuleRoutingModule { }
