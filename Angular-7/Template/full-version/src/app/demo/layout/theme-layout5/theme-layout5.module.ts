import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout5RoutingModule } from './theme-layout5-routing.module';
import { ThemeLayout5Component } from './theme-layout5.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout5Component],
  imports: [
    CommonModule,
    ThemeLayout5RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout5Module { }
