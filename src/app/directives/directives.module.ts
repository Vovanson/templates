import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { BuiltInComponent } from './built-in/built-in.component';
import { ItemBuiltComponent } from './built-in/item-built/item-built.component';
import { DirDashComponent } from './dir-dash/dir-dash.component';
import { ItemSwitchComponents } from './built-in/item-switch.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';


@NgModule({
  declarations: [
    BuiltInComponent, 
    DirDashComponent,
    ItemBuiltComponent,
    ItemSwitchComponents,
    AttrDirectivesComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule
  ]
})
export class DirectivesModule { }
