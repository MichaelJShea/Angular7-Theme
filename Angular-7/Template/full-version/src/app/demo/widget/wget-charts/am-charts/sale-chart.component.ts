import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-sale-chart',
  template: '<div id="sale-chart" style="height: 160px"></div>'
})
export class SaleChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('sale-chart', am4charts.XYChart);

      chart.data = [{
        'city': '1',
        'income': 23.5,
      }, {
        'city': '2',
        'income': 26.2,
      }, {
        'city': '3',
        'income': 28.1,
      }, {
        'city': '4',
        'income': 28.9,
      }, {
        'city': '5',
        'income': 24.6,
      }, {
        'city': '6',
        'income': 25.2,
      }, {
        'city': '7',
        'income': 28.1,
      }, {
        'city': '8',
        'income': 29.5,
      }, {
        'city': '9',
        'income': 24.6,
      }, {
        'city': '10',
        'income': 26.2,
      }, {
        'city': '11',
        'income': 29.1,
      }, {
        'city': '12',
        'income': 29.5,
      }, {
        'city': '13',
        'income': 24.6,
      }, {
        'city': '14',
        'income': 26.2,
      }, {
        'city': '15',
        'income': 29.1,
      }, {
        'city': '15',
        'income': 29.5,
      }, {
        'city': '17',
        'income': 24.6,
      }];

      // create category axis for years
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields['category'] = 'city';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.cellStartLocation = 0.15;
      categoryAxis.renderer.cellEndLocation = 0.85;
      categoryAxis.renderer.grid.template.strokeOpacity = 0;
      categoryAxis.renderer.inside = true;
      categoryAxis.renderer.labels.template.disabled = true;

      // create value axis for income and expenses
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.disabled = true;

      // create columns
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields['valueY'] = 'income';
      series.dataFields['categoryX'] = 'city';
      series.columns.template.height = am4core.percent(90);
      series.tooltipText = 'Income in : {valueY.value}';
      series.columns.template.fill = am4core.color('#2196f3');
      series.columns.template.stroke = am4core.color('#2196f3');

      // add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = 'zoomY';
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
