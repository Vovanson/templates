import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngFormsRoutingModule } from './ang-forms-routing.module';
import { AngFormsComponent } from './ang-forms.component';
import { AngReactiveFormsComponent } from './ang-reactive-forms/ang-reactive-forms.component';
import { NameEditorComponent } from './ang-reactive-forms/name-editor/name-editor.component';
import { ProfileEditorComponent } from './ang-reactive-forms/profile-editor/profile-editor.component';
import { AngDymamicFormsComponent } from './ang-dymamic-forms/ang-dymamic-forms.component';


@NgModule({
  declarations: [AngFormsComponent,
    AngReactiveFormsComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    AngDymamicFormsComponent
  ],
  imports: [
    CommonModule,
    AngFormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AngFormsModule { }
