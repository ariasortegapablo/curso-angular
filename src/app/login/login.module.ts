
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login.component';
import {NgElseDirective} from '../shared/directives/ng-else.directive';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from '../shared/service/auth..service';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'',component:LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild(routes)
    ],
  providers:[
    AuthService
  ]
})
export class LoginModule { }
