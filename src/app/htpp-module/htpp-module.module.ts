import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { HtppModuleRoutingModule } from './htpp-module-routing.module';
import { HttpCompComponent } from './http-comp/http-comp.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { HeroesComponent } from './heroes/heroes.component';
import { AuthService } from './auth.service';


import { HttpErrorHandler } from './http-error-handler.service';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { UploaderComponent } from './uploader/uploader.component';
import { PackageSearchComponent } from './package-search/package-search.component';

import { httpInterceptorProviders } from './http-interceptors/index';


@NgModule({
  declarations: [HttpCompComponent,
     MessagesComponent, 
     HeroesComponent, 
     ConfigComponent, 
     DownloaderComponent, 
     UploaderComponent, 
     PackageSearchComponent, 
  ],
  imports: [
    CommonModule,
    HtppModuleRoutingModule,
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    ),
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders

  ],
})
export class HtppModuleModule { }
