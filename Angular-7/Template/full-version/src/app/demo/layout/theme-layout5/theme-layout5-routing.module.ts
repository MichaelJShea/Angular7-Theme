import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout5Component} from './theme-layout5.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout5RoutingModule { }
