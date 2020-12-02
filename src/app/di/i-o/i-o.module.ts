import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOComponent } from './i-o.component';
import { ChildComponent } from './child/child.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { InspectorComponent } from './inspector/inspector.component';


@NgModule({
  declarations: [IOComponent, ChildComponent, TestComponent, InspectorComponent],
  imports: [
    CommonModule,
    BrowserModule, FormsModule
  ]
})
export class IOModule { }
