import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DynamicFormComponent } from './ang-dymamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './ang-dymamic-forms/dynamic-form-question/dynamic-form-question.component';

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
    AngDymamicFormsComponent,
    DynamicFormComponent, 
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    AngFormsRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule
  ]
})
export class AngFormsModule { }
