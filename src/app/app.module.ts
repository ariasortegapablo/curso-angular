import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TallaPipe } from './talla.pipe';
import { ProductModule } from './modules/product/product.module';



@NgModule({
  declarations: [
    AppComponent,
    TallaPipe
     ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
