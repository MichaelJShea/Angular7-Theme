import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-device-chart',
  template: '<div id="device-chart" style="height: 140px"></div>'
})
export class DeviceChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('device-chart', am4charts.PieChart);

      chart.data = [{
        'sector': 'Mobile',
        'size': 14.6
      },
        {
          'sector': 'Tablet',
          'size': 9.3
        },
        {
          'sector': 'Desktop',
          'size': 22.5
        }
      ];
      // Add label
      chart.innerRadius = 30;

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries() as any);
      pieSeries.dataFields['value'] = 'size';
      pieSeries.dataFields['category'] = 'sector';
      pieSeries['labels'].template['disabled'] = true;
      pieSeries['ticks'].template['disabled'] = true;
      pieSeries['colors'].step = 2;

      this.chart = chart as any;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
