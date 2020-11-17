import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InterpolationComponent} from './interpolation/interpolation.component'

const routes: Routes = [
   { path: 'interpolation', component: InterpolationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
