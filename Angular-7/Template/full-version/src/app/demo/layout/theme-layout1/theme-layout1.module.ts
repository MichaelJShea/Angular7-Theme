import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout1RoutingModule } from './theme-layout1-routing.module';
import { ThemeLayout1Component } from './theme-layout1.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout1Component],
  imports: [
    CommonModule,
    ThemeLayout1RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout1Module { }
