import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiDashboardComponent } from './di-dashboard/di-dashboard.component';
import { DiProvidersComponent } from './di-providers/di-providers.component';
import { DiAngularComponent } from './di-angular/di-angular.component';

const routes: Routes = [
  { path: 'di-dash', component: DiDashboardComponent },
  { path: 'di-angular', component: DiAngularComponent },
  { path: 'di-providers', component: DiProvidersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiRoutingModule { }