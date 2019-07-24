import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout12RoutingModule } from './theme-layout12-routing.module';
import { ThemeLayout12Component } from './theme-layout12.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout12Component],
  imports: [
    CommonModule,
    ThemeLayout12RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout12Module { }
