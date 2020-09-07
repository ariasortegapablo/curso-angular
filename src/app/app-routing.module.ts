import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProviderComponent} from './provider/provider.component';
import {AppComponent} from './app.component';

const routes: Routes = [

  {path:'provider',component:ProviderComponent},
  {path:'product',loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path:'client',loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
