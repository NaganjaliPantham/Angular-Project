import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { Agriculture1Component } from './agriculture1/agriculture1.component';
import { FarmingComponent } from './agriculture1/farming/farming.component';

const routes: Routes = [
  {
    path:'',component:AgricultureComponent
  },
  {
    path:'home',component:AgricultureComponent
  },
  {
path:'farming',component:FarmingComponent
  },
  {
    path:'agriculture',component:Agriculture1Component
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
