import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TemplateStatementComponent } from './template-statement/template-statement.component';
import { PipesComponent } from './pipes/pipes.component';
import { TransformPipe } from './pipes/transform.pipe';
import { ExponentialPipe } from './pipe/exponential.pipe';
import { FlyingHeroesComponent,  FlyingHeroesImpureComponent} from './pipes/flying-heroes.component';
import { FlyingHeroesPipe,  FlyingHeroesImpurePipe} from './pipe/flying-heroes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    TemplateStatementComponent,
    PipesComponent,
    TransformPipe,
    ExponentialPipe,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
