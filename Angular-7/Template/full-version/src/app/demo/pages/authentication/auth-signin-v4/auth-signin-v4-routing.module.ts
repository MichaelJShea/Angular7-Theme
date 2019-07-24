import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthSigninV4Component} from './auth-signin-v4.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSigninV4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSigninV4RoutingModule { }
