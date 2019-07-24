import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthSigninV3Component} from './auth-signin-v3.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSigninV3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSigninV3RoutingModule { }
