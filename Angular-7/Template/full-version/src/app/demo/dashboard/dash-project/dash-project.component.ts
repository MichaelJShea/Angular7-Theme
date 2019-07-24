import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dash-project',
  templateUrl: './dash-project.component.html',
  styleUrls: [
    './dash-project.component.scss',
    '../../../../../node_modules/ngx-bar-rating/themes/br-default-theme.css',
    '../../../../../node_modules/ngx-bar-rating/themes/br-bootstrap-theme.css',
    '../../../../../node_modules/ngx-bar-rating/themes/br-fontawesome-theme.css',
    '../../../../../node_modules/ngx-bar-rating/themes/br-fontawesome-o-theme.css',
    '../../../../../node_modules/ngx-bar-rating/themes/br-horizontal-theme.css',
    '../../../../../node_modules/ngx-bar-rating/themes/br-vertical-theme.css',
    '../../../../../node_modules/ngx-bar-rating/themes/br-stars-theme.css',
    '../../../../../node_modules/ngx-bar-rating/themes/br-movie-theme.css',
    '../../../../../node_modules/ngx-bar-rating/themes/br-square-theme.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashProjectComponent implements OnInit {
  public rateHorizontal = 16;
  constructor() { }

  ngOnInit() {
  }

}
