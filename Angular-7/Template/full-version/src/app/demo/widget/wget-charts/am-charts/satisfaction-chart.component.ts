import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-satisfaction-chart',
  template: '<div id="satisfaction-chart" style="height: 260px"></div>'
})
export class SatisfactionChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('satisfaction-chart', am4charts.PieChart);

      chart.data = [{
        'sector': 'Very Poor [66%]',
        'size': 8
      },
        {
          'sector': 'Satisfied [50%]',
          'size': 14.6
        },
        {
          'sector': 'Very Satisfied [40%]',
          'size': 22.5
        }, {
          'sector': 'Poor [30%]',
          'size': 8
        }
      ];
      // Add label
      chart.innerRadius = 40;

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields['value'] = 'size';
      pieSeries.dataFields['category'] = 'sector';
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.colors.step = 1;

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
