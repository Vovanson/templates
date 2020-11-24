import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiDashboardComponent } from './di-dashboard/di-dashboard.component';
import { DiProvidersComponent } from './di-providers/di-providers.component';
import { DiAngularComponent } from './di-angular/di-angular.component';
import { DiRoutingModule } from './di-routing.module';
import { HeroListComponent } from './di-angular/heroes/hero-list.component';


@NgModule({
  declarations: 
  [DiDashboardComponent, 
    DiProvidersComponent,
    DiAngularComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    DiRoutingModule
  ]
})
export class DiModule { }
