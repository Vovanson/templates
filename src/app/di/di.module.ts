import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiDashboardComponent } from './di-dashboard/di-dashboard.component';
import { DiProvidersComponent } from './di-providers/di-providers.component';
import { DiAngularComponent } from './di-angular/di-angular.component';
import { DiRoutingModule } from './di-routing.module';
import { HeroListComponent } from './di-angular/heroes/hero-list.component';
import { HeroesComponent } from './di-angular/heroes/heroes.component';
import {
  Provider1Component,
  Provider3Component,
  Provider4Component,
  Provider5Component,
  Provider6aComponent,
  Provider6bComponent,
  Provider7Component,
  Provider8Component,
  Provider9Component,
  Provider10Component,

} from './di-providers/di-providers.component';

import { Logger } from './logger.service';
import { UserService } from './user.service';
import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';

@NgModule({
  declarations: 
  [DiDashboardComponent, 
    DiProvidersComponent,
    DiAngularComponent,
    HeroListComponent,
    Provider1Component,
    Provider3Component,
    Provider4Component,
    Provider5Component,
    Provider6aComponent,
    Provider6bComponent,
    Provider7Component,
    Provider9Component,
    Provider10Component,
    Provider8Component,
    HeroesComponent

  ],
  imports: [
    CommonModule,
    DiRoutingModule,
  ],
  providers: [
    Logger,
    UserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  exports: [ DiProvidersComponent ]
})
export class DiModule { }
