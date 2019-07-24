import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthSigninV5Component} from './auth-signin-v5.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSigninV5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSigninV5RoutingModule { }
