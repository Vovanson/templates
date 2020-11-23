import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { BuiltInComponent } from './built-in/built-in.component';
import { ItemBuiltComponent } from './built-in/item-built/item-built.component';
import { DirDashComponent } from './dir-dash/dir-dash.component';
import { ItemSwitchComponents } from './built-in/item-switch.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';
import { HighlightDirective } from './highlight.directive';
import { StructurDirComponent } from './structur-dir/structur-dir.component';
import { heroSwitchComponents } from './structur-dir/hero-switch.components';
import { UnlessDirective } from './unless.directive';


@NgModule({
  declarations: [
    BuiltInComponent, 
    DirDashComponent,
    ItemBuiltComponent,
    ItemSwitchComponents,
    AttrDirectivesComponent,
    HighlightDirective,
    StructurDirComponent,
    heroSwitchComponents,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule
  ]
})
export class DirectivesModule { }
