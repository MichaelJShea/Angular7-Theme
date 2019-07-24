import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashProjectRoutingModule } from './dash-project-routing.module';
import { DashProjectComponent } from './dash-project.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {TypeChartComponent} from './charts/type-chart.component';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    DashProjectRoutingModule,
    SharedModule,
    BarRatingModule
  ],
  declarations: [
    DashProjectComponent,
    TypeChartComponent
  ]
})
export class DashProjectModule { }
