import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCompComponent } from './child-modules/customer/customer-comp/customer-comp.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LandingComponent } from '../landing/landing/landing.component';

 
const routes: Routes = [
  {path:'',component:LandingComponent},
   {path:'home-page',component:LandingComponent},
   {path:'AllRestaurants',component:RestaurantComponent},
  {path:'auth',loadChildren:()=>import("../auth/auth.module").then(m=>m.AuthModule)},
  {path: 'customer-page', component:CustomerCompComponent},
  { path: 'customer', loadChildren: () => import('./child-modules/customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
