import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-conversions-chart1',
  template: '<div id="conversions-chart1" style="height: 62px"></div>'
})
export class ConversionsChart1Component implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('conversions-chart1', am4charts.XYChart);

      chart.data = [{
        'city': '1',
        'income': 20.5,
      }, {
        'city': '2',
        'income': 18.2,
      }, {
        'city': '3',
        'income': 17.1,
      }, {
        'city': '4',
        'income': 16.9,
      }, {
        'city': '5',
        'income': 15.6,
      }, {
        'city': '6',
        'income': 14.2,
      }, {
        'city': '7',
        'income': 13.1,
      }, {
        'city': '8',
        'income': 16.5,
      }, {
        'city': '9',
        'income': 15.6,
      }, {
        'city': '10',
        'income': 16.2,
      }, {
        'city': '11',
        'income': 14.1,
      }, {
        'city': '12',
        'income': 18.5,
      }, {
        'city': '13',
        'income': 17.6,
      }, {
        'city': '14',
        'income': 19.2,
      }, {
        'city': '15',
        'income': 18.1,
      }, {
        'city': '15',
        'income': 17.5,
      }, {
        'city': '17',
        'income': 16.6,
      }, {
        'city': '18',
        'income': 19.5,
      }, {
        'city': '19',
        'income': 18.2,
      }, {
        'city': '20',
        'income': 19.1,
      }, {
        'city': '21',
        'income': 18.9,
      }, {
        'city': '22',
        'income': 15.6,
      }, {
        'city': '23',
        'income': 14.2,
      }, {
        'city': '24',
        'income': 12.1,
      }, {
        'city': '25',
        'income': 15.5,
      }, {
        'city': '26',
        'income': 19.6,
      }, {
        'city': '27',
        'income': 20.2,
      }, {
        'city': '28',
        'income': 19.1,
      }, {
        'city': '29',
        'income': 18.5,
      }, {
        'city': '30',
        'income': 17.6,
      }, {
        'city': '31',
        'income': 16.2,
      }, {
        'city': '32',
        'income': 17.1,
      }, {
        'city': '33',
        'income': 20.5,
      }, {
        'city': '34',
        'income': 21.6,
      }, {
        'city': '35',
        'income': 20.5,
      }, {
        'city': '36',
        'income': 21.2,
      }, {
        'city': '37',
        'income': 22.1,
      }, {
        'city': '38',
        'income': 20.9,
      }, {
        'city': '39',
        'income': 19.6,
      }, {
        'city': '40',
        'income': 20.2,
      }, {
        'city': '41',
        'income': 25.1,
      }, {
        'city': '42',
        'income': 26.5,
      }, {
        'city': '43',
        'income': 27.6,
      }, {
        'city': '44',
        'income': 26.2,
      }, {
        'city': '45',
        'income': 28.1,
      }, {
        'city': '46',
        'income': 25.5,
      }, {
        'city': '47',
        'income': 27.6,
      }, {
        'city': '48',
        'income': 25.9,
      }, {
        'city': '49',
        'income': 29.2,
      }, {
        'city': '50',
        'income': 25.2,
      }, {
        'city': '51',
        'income': 27.5,
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
      series.columns.template.fill = am4core.color('#7759de');
      series.columns.template.stroke = am4core.color('#7759de');

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
