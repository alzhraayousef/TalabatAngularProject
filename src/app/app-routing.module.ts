import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCompComponent } from './child-modules/customer/customer-comp/customer-comp.component';

const routes: Routes = [
  {path: 'customer-page', component:CustomerCompComponent},
  { path: 'customer', loadChildren: () => import('./child-modules/customer/customer.module').then(m => m.CustomerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
