import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-storage-chart',
  template: '<div id="storage-chart" style="height: 95px"></div>'
})
export class StorageChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('storage-chart', am4charts.XYChart);

      chart.data = [{
        'date': '2012-03-01',
        'price': 180,
        'price1': 50
      }, {
        'date': '2012-03-02',
        'price': 252,
        'price1': 40
      }, {
        'date': '2012-03-03',
        'price': 185,
        'price1': 55
      }, {
        'date': '2012-03-04',
        'price': 110,
        'price1': 38
      }, {
        'date': '2012-03-05',
        'price': 158,
        'price1': 87
      }, {
        'date': '2012-03-06',
        'price': 200,
        'price1': 67
      }, {
        'date': '2012-03-07',
        'price': 187,
        'price1': 100
      }];

      // Create axes
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.grid.template.disabled = true;
      // dateAxis.renderer.minGridDistance = 0;
      dateAxis.startLocation = 0.6;
      dateAxis.endLocation = 0.4;
      dateAxis.renderer.inside = true;
      dateAxis.renderer.labels.template.fill = am4core.color('#7759de');

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.logarithmic = true;
      valueAxis.renderer.minGridDistance = 0;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields['valueY'] = 'price';
      series.dataFields['dateX'] = 'date';
      series.tensionX = 0.8;
      series.strokeWidth = 3;
      series.fillOpacity = 0.1;
      series.tooltipText = '{valueY.value}';
      series.fill = am4core.color('#2196f3');
      series.stroke = am4core.color('#2196f3');
      series.strokeWidth = 2;

      // Create series
      const series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields['valueY'] = 'price1';
      series1.dataFields['dateX'] = 'date';
      series1.tensionX = 0.8;
      series1.strokeWidth = 3;
      series1.fillOpacity = 0.1;
      series1.tooltipText = '{valueY.value}';
      series1.fill = am4core.color('#7759de');
      series1.stroke = am4core.color('#7759de');
      series1.strokeWidth = 2;

      const bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.fill = am4core.color('#fff');
      bullet.circle.strokeWidth = 3;

      const bullet1 = series1.bullets.push(new am4charts.CircleBullet());
      bullet1.circle.fill = am4core.color('#fff');
      bullet1.circle.strokeWidth = 3;

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.fullWidthLineX = true;
      chart.cursor.xAxis = dateAxis as any;
      chart.cursor.lineX.strokeWidth = 0;
      chart.cursor.lineX.fill = am4core.color('#fff');
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
