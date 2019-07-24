import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-site-chart',
  template: '<div id="site-chart" style="height: 135px"></div>'
})
export class SiteChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

ngOnInit() {
}

ngAfterViewInit() {
  this.zone.runOutsideAngular(() => {

    const chart = am4core.create('site-chart', am4charts.XYChart);

    chart.data = [{
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
    }];

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.grid.template.disabled = true;
    // dateAxis.startLocation = 0.6;
    // dateAxis.endLocation = 0.4;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.inside = true;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields['valueY'] = 'price';
    series.dataFields['dateX'] = 'date';
    series.fillOpacity = 0;
    series.tooltipText = '{valueY.value}';
    series.fill = am4core.color('#2196f3');
    series.stroke = am4core.color('#2196f3');
    series.strokeWidth = 2;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = am4core.color('#fff');
    chart.cursor.lineX.fillOpacity = 0;

    const bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.fill = am4core.color('#fff');
    bullet.circle.strokeWidth = 3;
    bullet.circle.properties.scale = 0.7;

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
