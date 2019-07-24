import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninV5RoutingModule } from './auth-signin-v5-routing.module';
import { AuthSigninV5Component } from './auth-signin-v5.component';

@NgModule({
  declarations: [AuthSigninV5Component],
  imports: [
    CommonModule,
    AuthSigninV5RoutingModule
  ]
})
export class AuthSigninV5Module { }
