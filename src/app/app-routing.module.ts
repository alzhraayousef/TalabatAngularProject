import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path:'',redirectTo:'/employees',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import("../auth/auth.module").then(m=>m.AuthModule)},
  //{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
