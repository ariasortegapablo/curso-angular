import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AdminComponent} from './components/admin/admin.component';
import {Home1Component} from './components/home/home1/home1.component';
import {Home2Component} from './components/home/home2/home2.component';

const routes: Routes = [
  {path: 'home',
    component:HomeComponent,
    children:[
      {path :'home1',component:Home1Component},
      {path :'home2',component:Home2Component}
    ]
  },
  {path: 'about',component:AboutComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'user',loadChildren:() => import ('./modules/user/user.module').then(m => m.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
