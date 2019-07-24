import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout12Component} from './theme-layout12.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout12RoutingModule { }
