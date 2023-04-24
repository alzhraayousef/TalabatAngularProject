import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LandingComponent } from '../landing/landing/landing.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
   {path:'home-page',component:LandingComponent},
   {path:'AllRestaurants',component:RestaurantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
