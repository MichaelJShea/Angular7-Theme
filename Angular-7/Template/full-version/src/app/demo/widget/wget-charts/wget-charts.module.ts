import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WgetChartsRoutingModule } from './wget-charts-routing.module';
import { WgetChartsComponent } from './wget-charts.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {SupportAnalyticsComponent} from './am-charts/support-analytics.component';
import {ChartPercentComponent} from './am-charts/chart-percent.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageChartComponent} from './am-charts/storage-chart.component';
import {AccountChartComponent} from './am-charts/account-chart.component';
import {DeviceChartComponent} from './am-charts/device-chart.component';
import {Real4ChartComponent} from './am-charts/real4-chart.component';
import {Real1ChartComponent} from './am-charts/real1-chart.component';
import {Real2ChartComponent} from './am-charts/real2-chart.component';
import {Real3ChartComponent} from './am-charts/real3-chart.component';
import {BarRatingModule} from 'ngx-bar-rating';
import {TimeUserComponent} from './am-charts/time-user.component';
import {HorizontalBarChartComponent} from './am-charts/horizontal-bar-chart.component';
import {ConversionsChartComponent} from './am-charts/conversions-chart.component';
import {SiteChartComponent} from './am-charts/site-chart.component';
import {SatisfactionChartComponent} from './am-charts/satisfaction-chart.component';
import {TimeChartComponent} from './am-charts/time-chart.component';
import {AmMapChartComponent} from './am-charts/am-map-chart.component';
import {SaleChartComponent} from './am-charts/sale-chart.component';
import {CustomerChartComponent} from './am-charts/customer-chart.component';
import {ConversionsChart1Component} from './am-charts/conversions-chart1.component';
import {RevenueChartComponent} from './am-charts/revenue-chart.component';
import {MarketChartComponent} from './am-charts/market-chart.component';
import {TypeChartComponent} from './am-charts/type-chart.component';
import {SiteVisitorChartComponent} from './am-charts/site-visitor-chart.component';
import {TrafficChartComponent} from './am-charts/traffic-chart.component';
import {SupportChartComponent} from './am-charts/support-chart.component';
import {AverageChart11Component} from './am-charts/average-chart11.component';
import {AverageChart12Component} from './am-charts/average-chart12.component';
import {AverageChart3Component} from './am-charts/average-chart3.component';
import {AverageChart4Component} from './am-charts/average-chart4.component';
import {CryptoChartComponent} from './am-charts/crypto-chart.component';

@NgModule({
  imports: [
    CommonModule,
    WgetChartsRoutingModule,
    SharedModule,
    NgbDropdownModule,
    BarRatingModule
  ],
  declarations: [
    WgetChartsComponent,
    SupportAnalyticsComponent,
    ChartPercentComponent,
    StorageChartComponent,
    AccountChartComponent,
    DeviceChartComponent,
    Real1ChartComponent,
    Real2ChartComponent,
    Real3ChartComponent,
    Real4ChartComponent,
    TimeUserComponent,
    HorizontalBarChartComponent,
    ConversionsChartComponent,
    SiteChartComponent,
    SatisfactionChartComponent,
    TimeChartComponent,
    AmMapChartComponent,
    SaleChartComponent,
    CustomerChartComponent,
    ConversionsChart1Component,
    RevenueChartComponent,
    MarketChartComponent,
    TypeChartComponent,
    SiteVisitorChartComponent,
    TrafficChartComponent,
    SupportChartComponent,
    AverageChart11Component,
    AverageChart12Component,
    AverageChart3Component,
    AverageChart4Component,
    CryptoChartComponent
  ]
})
export class WgetChartsModule { }
