import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-real3-chart',
  template: '<div id="real3-chart" style="height: 20px; width: 100%"></div>'
})
export class Real3ChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('real3-chart', am4charts.XYChart);

      const data = [];
      let visits = 10;
      let i = 0;

      for (i = 0; i <= 30; i++) {
        visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        visits = (visits > -5 && visits < 5) ? visits : 0;
        visits = (visits < 0) ? 0 : visits;
        chart.data.push({
          date: new Date().setSeconds(i - 30),
          value: visits
        });
      }

      // Create axes
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.startLocation = 0.6;
      dateAxis.endLocation = 0.4;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.renderer.inside = true;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.logarithmic = false;
      valueAxis.renderer.minGridDistance = 1;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields['valueY'] = 'value';
      series.dataFields['dateX'] = 'date';
      series.strokeWidth = 2;
      series.tooltipText = '{valueY.value}';
      series.fill = am4core.color('#4caf50');
      series.stroke = am4core.color('#4caf50');
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
