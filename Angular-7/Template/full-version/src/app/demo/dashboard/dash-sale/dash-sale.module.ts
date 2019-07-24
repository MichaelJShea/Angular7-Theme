import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashSaleRoutingModule } from './dash-sale-routing.module';
import { DashSaleComponent } from './dash-sale.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {ConversionsChartComponent} from './charts/conversions-chart.component';
import {ConversionsChart1Component} from './charts/conversions-chart1.component';
import {TrafficChartComponent} from './charts/traffic-chart.component';
import {AverageChart1Component} from './charts/average-chart1.component';
import {AverageChart14Component} from './charts/average-chart14.component';
import {SiteChartComponent} from './charts/site-chart.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashSaleComponent,
    ConversionsChartComponent,
    ConversionsChart1Component,
    TrafficChartComponent,
    AverageChart1Component,
    AverageChart14Component,
    SiteChartComponent
  ],
  imports: [
    CommonModule,
    DashSaleRoutingModule,
    SharedModule,
    NgbDropdownModule
  ]
})
export class DashSaleModule { }
