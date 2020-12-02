import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngFormsComponent } from './ang-forms.component';
import { AngDymamicFormsComponent } from './ang-dymamic-forms/ang-dymamic-forms.component';import { AngReactiveFormsComponent } from './ang-reactive-forms/ang-reactive-forms.component';

const routes: Routes = [
  { path: 'forms', component: AngFormsComponent,
  // children: [
  //   {
  //     path: 'reactive-forms', // child route path
  //     component: AngReactiveFormsComponent, // child route component that the router renders
  //   },
  // ],
},
{ path: 'reactive-forms', component: AngReactiveFormsComponent,},
{ path: 'dynamic-forms', component: AngDymamicFormsComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngFormsRoutingModule { }
