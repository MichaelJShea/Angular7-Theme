import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-type-chart',
  template: '<div id="type-chart" style="height: 155px"></div>'
})
export class TypeChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('type-chart', am4charts.PieChart);

      chart.data = [{
        'sector': 'Desktop Computers',
        'size': 8
      },
        {
          'sector': 'Smartphones',
          'size': 14.6
        },
        {
          'sector': 'Tablets',
          'size': 22.5
        }
      ];
      // Add label
      chart.innerRadius = 35;

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields['value'] = 'size';
      pieSeries.dataFields['category'] = 'sector';
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.colors.step = 3;

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
