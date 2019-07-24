import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAnalyticsRoutingModule } from './dash-analytics-routing.module';
import { DashAnalyticsComponent } from './dash-analytics.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {TypeChartComponent} from './chart/type-chart.component';
import {AmMapChartComponent} from './chart/am-map-chart.component';
import {TimeUserComponent} from './chart/time-user.component';

@NgModule({
  imports: [
    CommonModule,
    DashAnalyticsRoutingModule,
    SharedModule
  ],
  declarations: [
    DashAnalyticsComponent,
    TypeChartComponent,
    AmMapChartComponent,
    TimeUserComponent
  ]
})
export class DashAnalyticsModule { }
