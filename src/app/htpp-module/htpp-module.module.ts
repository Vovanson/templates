import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HtppModuleRoutingModule } from './htpp-module-routing.module';
import { HttpCompComponent } from './http-comp/http-comp.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [HttpCompComponent, MessagesComponent],
  imports: [
    CommonModule,
    HtppModuleRoutingModule,
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  providers: [
    
    MessageService,

  ],
})
export class HtppModuleModule { }
