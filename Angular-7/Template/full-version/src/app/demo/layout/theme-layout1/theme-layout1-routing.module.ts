import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout1Component} from './theme-layout1.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout1RoutingModule { }
