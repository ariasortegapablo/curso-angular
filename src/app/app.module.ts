import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import {FormsModule} from '@angular/forms';
import { TallaPipe } from './talla.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    TallaPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
