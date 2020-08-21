import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from './components/product1/product1.component';
import { Product2Component } from './components/product2/product2.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Product1Component,
    Product2Component
  ],
  exports:[
    
  ]
})
export class ProductModule { }