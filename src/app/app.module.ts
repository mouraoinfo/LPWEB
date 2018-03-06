import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'ng-bootstrap-modal';
import { ModalModule } from 'ng-bootstrap-modal';




import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
