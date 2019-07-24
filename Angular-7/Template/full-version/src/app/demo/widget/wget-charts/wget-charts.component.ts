import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare const $: any;

import '../../../../assets/charts/flot/jquery.flot.js';
import '../../../../assets/charts/flot/jquery.flot.categories.js';
import '../../../../assets/charts/flot/curvedLines.js';
import '../../../../assets/charts/flot/jquery.flot.tooltip.min.js';
import '../../../../../node_modules/peity/jquery.peity.min.js';

@Component({
  selector: 'app-wget-charts',
  templateUrl: './wget-charts.component.html',
  styleUrls: ['./wget-charts.component.scss',
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
export class WgetChartsComponent implements OnInit {
  public rateHorizontal = 16;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $.plot($('#transactions1'), [{
        data: [
          [0, 20],
          [1, 15],
          [2, 10],
          [3, 15],
          [4, 25],
          [5, 30],
          [6, 20],
          [7, 25],
          [8, 10],
          [9, 35],
          [10, 30],
          [11, 25],
          [12, 20]
        ],
        color: '#2196f3',
        bars: {
          show: true,
          lineWidth: 4,
          fill: true,
          fillColor: {
            colors: [{
              opacity: 1
            }, {
              opacity: 1
            }]
          },
          barWidth: 0.4,
          align: 'center',
          horizontal: false
        },
        points: {
          show: false,
          radius: 3,
          fill: true
        },
        curvedLines: {
          apply: false,
        }
      }], {
        series: {
          label: '',
          curvedLines: {
            active: true,
            nrSplinePoints: 0
          },
        },
        tooltip: {
          show: true,
          content: 'x : %x | y : %y'
        },
        grid: {
          hoverable: true,
          borderWidth: 0,
          labelMargin: 0,
          axisMargin: 0,
          minBorderMargin: 0,
        },
        yaxis: {
          min: 0,
          max: 50,
          color: 'transparent',
          font: {
            size: 0,
          }
        },
        xaxis: {
          color: 'transparent',
          font: {
            size: 0,
          }
        }
      });
      $.plot($('#transactions2'), [{
        data: [
          [0, 10],
          [1, 15],
          [2, 35],
          [3, 30],
          [4, 40],
          [5, 35],
          [6, 30],
          [7, 25],
          [8, 10],
          [9, 40],
          [10, 35],
          [11, 30],
          [12, 20]
        ],
        color: '#f44336',
        bars: {
          show: true,
          lineWidth: 4,
          fill: true,
          fillColor: {
            colors: [{
              opacity: 1
            }, {
              opacity: 1
            }]
          },
          barWidth: 0.4,
          align: 'center',
          horizontal: false
        },
        points: {
          show: false,
          radius: 3,
          fill: true
        },
        curvedLines: {
          apply: false,
        }
      }], {
        series: {
          label: '',
          curvedLines: {
            active: true,
            nrSplinePoints: 0
          },
        },
        tooltip: {
          show: true,
          content: 'x : %x | y : %y'
        },
        grid: {
          hoverable: true,
          borderWidth: 0,
          labelMargin: 0,
          axisMargin: 0,
          minBorderMargin: 0,
        },
        yaxis: {
          min: 0,
          max: 50,
          color: 'transparent',
          font: {
            size: 0,
          }
        },
        xaxis: {
          color: 'transparent',
          font: {
            size: 0,
          }
        }
      });
    });

    $('span.data-attributes').peity('donut');
    $('span.pie_1').peity('pie', {
      fill: ['#2196f3', '#eff3f6']
    });
    $('span.pie_2').peity('pie', {
      fill: ['#eff3f6', '#2196f3']
    });
    $('span.pie_3').peity('pie', {
      fill: ['#eff3f6', '#2196f3']
    });
  }

}
