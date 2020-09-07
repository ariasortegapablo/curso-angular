
import { CommonModule } from '@angular/common';
import { Product1Component } from './product1/product1.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ProductRoutingModule} from './product-routing.module';



@NgModule({
  declarations: [
    Product1Component,

  ],
    imports: [
        ProductRoutingModule,
        SharedModule
    ],
  exports:[
    Product1Component
  ]
})
export class ProductModule { }
