import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hd-dashboard',
        loadChildren: './hd-dashboard/hd-dashboard.module#HdDashboardModule'
      },
      {
        path: 'hd-customer',
        loadChildren: './hd-customer/hd-customer.module#HdCustomerModule'
      },
      {
        path: 'hd-customer-list',
        loadChildren: './hd-customer-list/hd-customer-list.module#HdCustomerListModule'
      },
      {
        path: 'hd-customer-detail',
        loadChildren: './hd-customer-detail/hd-customer-detail.module#HdCustomerDetailModule'
      },
      {
        path: 'hd-ticket',
        loadChildren: './hd-ticket/hd-ticket.module#HdTicketModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
