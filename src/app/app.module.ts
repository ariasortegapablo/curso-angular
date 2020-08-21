import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductModule } from './modules/product/product.module';
import { ClientModule } from './modules/client/client.module';




@NgModule({
  declarations: [
    AppComponent,
   
     ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
