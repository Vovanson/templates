import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TemplateStatementComponent } from './template-statement/template-statement.component';
import { PipesComponent } from './pipes/pipes.component';
import { TransformPipe } from './pipes/transform.pipe';
import { ExponentialPipe } from './pipe/exponential.pipe';
import { FlyingHeroesComponent,  FlyingHeroesImpureComponent} from './pipes/flying-heroes.component';
import { FlyingHeroesPipe,  FlyingHeroesImpurePipe} from './pipe/flying-heroes.pipe';
import { HeroAsyncMessageComponent } from './pipes/hero-async-message.component';
import { FetchJsonPipe } from './pipe/fetch-json.pipe';
import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { PropetyBindingComponent } from './propety-binding/propety-binding.component';
import { ItemDetailComponent } from './propety-binding/item-detail/item-detail.component';
import { ItemListComponent } from './propety-binding/item-list/item-list.component';
import { StringInitComponent } from './propety-binding/string-init/string-init.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ItemDetail2Component } from './event-binding/item-detail/item-detail2.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { SizerComponent } from './two-way-binding/sizer/sizer.component';
import { TemplExrpOperatorComponent } from './templ-exrp-operator/templ-exrp-operator.component';
import { SvgComponent } from './svg/svg.component';
import { TemplatesModule } from './templates/templates.module';
import { DirectivesModule } from './directives/directives.module';

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
    FlyingHeroesImpurePipe,
    HeroAsyncMessageComponent,
    FetchJsonPipe,
    BindingSyntaxComponent,
    PropetyBindingComponent,
    ItemDetailComponent,
    ItemListComponent,
    StringInitComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    ItemDetail2Component,
    TwoWayBindingComponent,
    SizerComponent,
    TemplExrpOperatorComponent,
    SvgComponent


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TemplatesModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
