import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Test2Component} from './test2/test2.component';
import {TestComponent} from './components/test.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {AppRoutingModule} from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { Home1Component } from './components/home/home1/home1.component';
import { Home2Component } from './components/home/home2/home2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
