import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-horizontal-bar-chart',
  template: '<div id="horizontal-bar-chart" style="height: 400px"></div>'
})
export class HorizontalBarChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('horizontal-bar-chart', am4charts.XYChart);

      chart.data = [{
        'city': 'USA',
        'income': 23.5,
        'expenses': 18.1,
        'profit': 25.5,
      }, {
        'city': 'India',
        'income': 26.2,
        'expenses': 22.8,
        'profit': 18.5,
      }, {
        'city': 'China',
        'income': 29.1,
        'expenses': 23.9,
        'profit': 20.5,
      }, {
        'city': 'Brazil',
        'income': 29.5,
        'expenses': 25.1,
        'profit': 19.1,
      }, {
        'city': 'Africa',
        'income': 24.6,
        'expenses': 10,
        'profit': 0,
      }];

      const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields['category'] = 'city';
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.cellStartLocation = 0.15;
      categoryAxis.renderer.cellEndLocation = 0.85;
      categoryAxis.renderer.grid.template.strokeOpacity = 0;

      const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeOpacity = 0.1;

      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields['categoryY'] = 'city';
      series.dataFields['valueX'] = 'income';
      series.name = 'Income';
      series.columns.template.height = am4core.percent(90);
      series.tooltipText = 'Income in {categoryY}: {valueX.value}';
      series.columns.template.fill = am4core.color('#f44336');
      series.columns.template.stroke = am4core.color('#f44336');

      const series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields['categoryY'] = 'city';
      series2.dataFields['valueX'] = 'expenses';
      series2.columns.template.height = am4core.percent(90);
      series2.name = 'Expenses';
      series2.tooltipText = 'Expenses in {categoryY}: {valueX.value}';
      series2.columns.template.fill = am4core.color('#2196f3');
      series2.columns.template.stroke = am4core.color('#2196f3');

      const series3 = chart.series.push(new am4charts.ColumnSeries());
      series3.dataFields['categoryY'] = 'city';
      series3.dataFields['valueX'] = 'profit';
      series3.columns.template.height = am4core.percent(90);
      series3.name = 'Expenses';
      series3.tooltipText = 'Expenses in {categoryY}: {valueX.value}';
      series3.columns.template.fill = am4core.color('#4caf50');
      series3.columns.template.stroke = am4core.color('#4caf50');

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = 'zoomY';

      chart.legend = new am4charts.Legend();
      chart.legend.position = 'top';

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
