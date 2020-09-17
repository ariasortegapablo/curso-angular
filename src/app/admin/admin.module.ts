import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../shared/service/product..service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { EditcreateComponent } from './derecha/editcreate.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    BodyComponent,
    EditcreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[
    ProductService
  ]
})
export class AdminModule { }
