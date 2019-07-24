import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analytics',
        loadChildren: './dash-analytics/dash-analytics.module#DashAnalyticsModule'
      },
      {
        path: 'sale',
        loadChildren: './dash-sale/dash-sale.module#DashSaleModule'
      },
      {
        path: 'project',
        loadChildren: './dash-project/dash-project.module#DashProjectModule'
      },
      {
        path: 'help-desk',
        loadChildren: './dash-help-desk/dash-help-desk.module#DashHelpDeskModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
