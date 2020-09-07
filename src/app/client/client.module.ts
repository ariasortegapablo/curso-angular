import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';
import { Client1Component } from './client1/client1.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    Client1Component],
  imports: [
    ClientRoutingModule,
    SharedModule
  ],
  exports:
    [
      Client1Component
    ]
})
export class ClientModule { }
