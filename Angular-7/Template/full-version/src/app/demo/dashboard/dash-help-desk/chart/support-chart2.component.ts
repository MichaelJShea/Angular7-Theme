import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-support-chart2',
  template: '<div id="support-chart2" style="height: 100px"></div>'
})
export class SupportChart2Component implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('support-chart2', am4charts.XYChart);

      chart.data = [{
        'date': '2018-01-1',
        'price': 180
      }, {
        'date': '2018-01-2',
        'price': 252
      }, {
        'date': '2018-01-3',
        'price': 185
      }, {
        'date': '2018-01-4',
        'price': 189
      }, {
        'date': '2018-01-5',
        'price': 158
      }, {
        'date': '2018-01-6',
        'price': 200
      }, {
        'date': '2018-01-7',
        'price': 187
      }, {
        'date': '2018-01-8',
        'price': 180
      }, {
        'date': '2018-01-9',
        'price': 252
      }, {
        'date': '2018-01-10',
        'price': 185
      }, {
        'date': '2018-01-11',
        'price': 268
      }, {
        'date': '2018-01-12',
        'price': 158
      }, {
        'date': '2018-01-13',
        'price': 200
      }, {
        'date': '2018-01-14',
        'price': 187
      }, {
        'date': '2018-01-15',
        'price': 180
      }, {
        'date': '2018-01-16',
        'price': 252
      }, {
        'date': '2018-01-17',
        'price': 185
      }, {
        'date': '2018-01-18',
        'price': 250
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
        'price': 185
      }, {
        'date': '2018-01-25',
        'price': 295
      }, {
        'date': '2018-01-26',
        'price': 158
      }, {
        'date': '2018-01-27',
        'price': 200
      }, {
        'date': '2018-01-28',
        'price': 90
      }];

      // Create axes
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      // dateAxis.renderer.grid.template.disabled = true;
      dateAxis.startLocation = 0.6;
      dateAxis.endLocation = 0.4;
      dateAxis.renderer.opposite = true;
      // dateAxis.renderer.labels.template.disabled = true;
      // dateAxis.renderer.inside = true;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.logarithmic = false;
      valueAxis.renderer.minGridDistance = 1;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields['valueY'] = 'price';
      series.dataFields['dateX'] = 'date';
      series.strokeWidth = 3;
      series.fillOpacity = 0.1;
      series.tooltipText = '{valueY.value}';
      series.stroke = am4core.color('#4caf50');
      series.strokeWidth = 3;
      series.fillOpacity = 1;
      const gradient = new am4core.LinearGradient();
      gradient.addColor(am4core.color('#4caf50'), 0.2);
      gradient.addColor(am4core.color('#4caf50'), 0);
      gradient.rotation = 90;
      series.fill = gradient;

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.fullWidthLineX = true;
      chart.cursor.lineX.strokeWidth = 0;
      chart.cursor.lineX.fillOpacity = 0;
      chart.padding(0, 0, 0, 0);

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
