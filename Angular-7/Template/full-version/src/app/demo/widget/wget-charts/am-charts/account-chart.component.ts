import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-account-chart',
  template: '<div id="account-chart" style="height: 215px"></div>'
})
export class AccountChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('account-chart', am4charts.XYChart);

      chart.hiddenState.properties.opacity = 0;
      // this creates initial fade-in

      const data = [];
      let grothactual = 100;
      let actual = 200;
      let plan = 300;

      for (let i = 1; i < 120; i++) {
        grothactual += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
        actual = Math.round(grothactual + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
        plan = Math.round(actual + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 3);
        data.push({
          date: new Date(2018, 0, i),
          grothactual: grothactual,
          actual: actual,
          plan: plan
        });
      }

      chart.data = data;

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.tooltip.disabled = true;
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.inside = true;
      dateAxis.startLocation = 0.6;
      dateAxis.endLocation = 0.4;
      dateAxis.renderer.grid.template.strokeDasharray = '10,5';
      dateAxis.renderer.grid.template.strokeOpacity = 0.1;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.grid.template.strokeDasharray = '10,5';
      valueAxis.renderer.grid.template.strokeOpacity = 0.1;

      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields['dateX'] = 'date';
      series.dataFields['valueY'] = 'plan';
      series.tooltipText = 'Plan: {valueY.value}';
      series.name = 'Plan';
      series.sequencedInterpolation = true;
      series.fillOpacity = 1;
      series.stroke = am4core.color('#2196f3');
      series.fill = am4core.color('#2196f3');
      series.defaultState.transitionDuration = 1000;
      series.tensionX = 0.8;

      const series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields['dateX'] = 'date';
      series2.dataFields['valueY'] = 'actual';
      series2.tooltipText = 'Actual: {valueY.value}';
      series2.name = 'Actual';
      series2.sequencedInterpolation = true;
      series2.defaultState.transitionDuration = 1500;
      series2.stroke = am4core.color('#7759de');
      series2.fill = am4core.color('#7759de');
      series2.tensionX = 0.8;
      series2.fillOpacity = 1;

      const series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields['dateX'] = 'date';
      series3.dataFields['valueY'] = 'grothactual';
      series3.tooltipText = 'Groth Actual: {valueY.value}';
      series3.name = 'Groth Actual';
      series3.sequencedInterpolation = true;
      series3.defaultState.transitionDuration = 1500;
      series3.stroke = am4core.color('#4caf50');
      series3.fill = am4core.color('#4caf50');
      series3.tensionX = 0.7;
      series3.fillOpacity = 1;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.xAxis = dateAxis as any;

      chart.legend = new am4charts.Legend();
      chart.legend.position = 'top';

      chart.seriesContainer.zIndex = -1;

      chart.padding(5, 0, -5, -5);

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
