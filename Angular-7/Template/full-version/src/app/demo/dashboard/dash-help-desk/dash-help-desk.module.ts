import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashHelpDeskRoutingModule } from './dash-help-desk-routing.module';
import { DashHelpDeskComponent } from './dash-help-desk.component';
import {SupportChartComponent} from './chart/support-chart.component';
import {SupportChart1Component} from './chart/support-chart1.component';
import {SupportChart2Component} from './chart/support-chart2.component';
import {SatisfactionChartComponent} from './chart/satisfaction-chart.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [
    DashHelpDeskComponent,
    SupportChartComponent,
    SupportChart1Component,
    SupportChart2Component,
    SatisfactionChartComponent
  ],
  imports: [
    CommonModule,
    DashHelpDeskRoutingModule,
    SharedModule
  ]
})
export class DashHelpDeskModule { }
