import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HdDashboardRoutingModule } from './hd-dashboard-routing.module';
import { HdDashboardComponent } from './hd-dashboard.component';
import {SatisfactionChartComponent} from './chart/satisfaction-chart.component';
import {SupportChartComponent} from './chart/support-chart.component';
import {SupportChart1Component} from './chart/support-chart1.component';
import {SupportChart2Component} from './chart/support-chart2.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [
    HdDashboardComponent,
    SatisfactionChartComponent,
    SupportChartComponent,
    SupportChart1Component,
    SupportChart2Component
  ],
  imports: [
    CommonModule,
    HdDashboardRoutingModule,
    SharedModule
  ]
})
export class HdDashboardModule { }
