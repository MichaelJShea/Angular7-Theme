import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'static',
        loadChildren: './theme-static/theme-static.module#ThemeStaticModule'
      },
      {
        path: 'fixed',
        loadChildren: './theme-fixed/theme-fixed.module#ThemeFixedModule'
      },
      {
        path: 'nav-fixed',
        loadChildren: './theme-nav-fixed/theme-nav-fixed.module#ThemeNavFixedModule'
      },
      {
        path: 'nav-image',
        loadChildren: './theme-nav-image/theme-nav-image.module#ThemeNavImageModule'
      },
      {
        path: 'collapse-menu',
        loadChildren: './theme-collapse-menu/theme-collapse-menu.module#ThemeCollapseMenuModule'
      },
      {
        path: 'horizontal',
        loadChildren: './theme-horizontal/theme-horizontal.module#ThemeHorizontalModule'
      },
      {
        path: 'box',
        loadChildren: './theme-box/theme-box.module#ThemeBoxModule'
      },
      {
        path: 'rtl',
        loadChildren: './theme-rtl/theme-rtl.module#ThemeRtlModule'
      },
      {
        path: 'light',
        loadChildren: './theme-light/theme-light.module#ThemeLightModule'
      },
      {
        path: 'dark',
        loadChildren: './theme-dark/theme-dark.module#ThemeDarkModule'
      },
      {
        path: 'icon-color',
        loadChildren: './theme-icon-color/theme-icon-color.module#ThemeIconColorModule'
      },
      {
        path: 'layout-1',
        loadChildren: './theme-layout1/theme-layout1.module#ThemeLayout1Module'
      },
      {
        path: 'layout-2',
        loadChildren: './theme-layout2/theme-layout2.module#ThemeLayout2Module'
      },
      {
        path: 'layout-3',
        loadChildren: './theme-layout3/theme-layout3.module#ThemeLayout3Module'
      },
      {
        path: 'layout-4',
        loadChildren: './theme-layout4/theme-layout4.module#ThemeLayout4Module'
      },
      {
        path: 'layout-5',
        loadChildren: './theme-layout5/theme-layout5.module#ThemeLayout5Module'
      },
      {
        path: 'layout-12',
        loadChildren: './theme-layout12/theme-layout12.module#ThemeLayout12Module'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
