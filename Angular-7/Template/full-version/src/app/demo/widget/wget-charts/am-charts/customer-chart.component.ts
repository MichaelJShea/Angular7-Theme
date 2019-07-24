import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-customer-chart',
  template: '<div id="customer-chart" style="height: 200px"></div>'
})
export class CustomerChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('customer-chart', am4charts.PieChart);

      chart.data = [{
        'sector': 'New',
        'size': 8
      },
        {
          'sector': 'Custom',
          'size': 14.6
        },
        {
          'sector': 'Return',
          'size': 22.5
        }
      ];
      // Add label
      chart.innerRadius = 95;

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields['value'] = 'size';
      pieSeries.dataFields['category'] = 'sector';
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.colors.step = 4;

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
