import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-time-chart',
  template: '<div id="time-chart" style="height: 225px"></div>'
})
export class TimeChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('time-chart', am4charts.XYChart);

      chart.data = [{
        'date': '2018-01-11',
        'price': 110
      }, {
        'date': '2018-01-12',
        'price': 128
      }, {
        'date': '2018-01-13',
        'price': 135
      }, {
        'date': '2018-01-14',
        'price': 187
      }, {
        'date': '2018-01-15',
        'price': 180
      }, {
        'date': '2018-01-16',
        'price': 222
      }, {
        'date': '2018-01-17',
        'price': 185
      }, {
        'date': '2018-01-18',
        'price': 195
      }, {
        'date': '2018-01-19',
        'price': 158
      }, {
        'date': '2018-01-20',
        'price': 200
      }, {
        'date': '2018-01-21',
        'price': 187
      }, {
        'date': '2018-01-22',
        'price': 180
      }, {
        'date': '2018-01-23',
        'price': 252
      }, {
        'date': '2018-01-24',
        'price': 233
      }, {
        'date': '2018-01-25',
        'price': 200
      }, {
        'date': '2018-01-26',
        'price': 280
      }, {
        'date': '2018-01-27',
        'price': 250
      }, {
        'date': '2018-01-28',
        'price': 300
      }];

      // Create axes
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.startLocation = 0.6;
      dateAxis.endLocation = 0.4;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.renderer.inside = true;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      // valueAxis.logarithmic = true;
      valueAxis.renderer.minGridDistance = 50;
      valueAxis.renderer.inside = true;
      // valueAxis.renderer.labels.template.disabled = true;

      // Create series
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields['valueY'] = 'price';
      series.dataFields['dateX'] = 'date';
      series.strokeWidth = 3;
      series.fillOpacity = 0;
      series.tooltipText = '{valueY.value}';
      series.fill = am4core.color('#4caf50');
      series.stroke = am4core.color('#4caf50');
      series.strokeWidth = 3;

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.fullWidthLineX = true;
      chart.cursor.lineX.strokeWidth = 0;
      chart.cursor.lineX.fill = am4core.color('#fff');
      chart.cursor.lineX.fillOpacity = 0;
      chart.padding(5, 0, 0, 0);

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
