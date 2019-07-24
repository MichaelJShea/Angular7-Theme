import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninV3RoutingModule } from './auth-signin-v3-routing.module';
import { AuthSigninV3Component } from './auth-signin-v3.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AuthSigninV3Component],
  imports: [
    CommonModule,
    AuthSigninV3RoutingModule,
    NgbCarouselModule
  ]
})
export class AuthSigninV3Module { }
