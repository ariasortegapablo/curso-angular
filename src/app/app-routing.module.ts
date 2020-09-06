import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:'pages',loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},

  // {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'home',loadChildren: () => import('./pages1/home/home.module').then(m => m.HomeModule)},
  // {path:'admin',loadChildren: () => import('./pages1/admin/admin.module').then(m => m.AdminModule)},
  // {path:'list',loadChildren: () => import('./pages1/list/list.module').then(m => m.ListModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
