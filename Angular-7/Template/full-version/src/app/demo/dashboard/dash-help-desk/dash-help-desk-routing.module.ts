import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashHelpDeskComponent} from './dash-help-desk.component';

const routes: Routes = [
  {
    path: '',
    component: DashHelpDeskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashHelpDeskRoutingModule { }
