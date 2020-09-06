
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {NgElseDirective} from '../directives/ng-else.directive';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
