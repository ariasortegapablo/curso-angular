
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {NgElseDirective} from '../directives/ng-else.directive';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from '../service/auth..service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
    imports: [
      HttpClientModule,
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
  providers:[
    AuthService
  ]
})
export class LoginModule { }
