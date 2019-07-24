import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-support-analytics',
  template: '<div id="hd-complited-ticket" style="width: 100%; height: 130px"></div>'
})
export class SupportAnalyticsComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.GaugeChart;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      const chart = am4core.create('hd-complited-ticket', am4charts.GaugeChart);
      chart.innerRadius = am4core.percent(82);

      const axis = chart.xAxes.push(new am4charts.ValueAxis() as any);
      axis['min'] = 0;
      axis['max'] = 100;
      axis['strictMinMax'] = true;
      axis.renderer['radius'] = am4core.percent(80);
      axis.renderer.inside = true;
      axis.renderer.line.strokeOpacity = 0;
      axis.renderer.ticks.template.strokeOpacity = 1;
      axis.renderer.ticks.template.length = 10;
      axis.renderer.grid.template.disabled = true;
      axis.renderer.labels.template['radius'] = 40;
      axis.renderer.labels.template.adapter.add('text', function() {
        return '';
      });

      const axis2 = chart.xAxes.push(new am4charts.ValueAxis() as any);
      axis2['min'] = 0;
      axis2['max'] = 100;
      axis2.renderer['innerRadius'] = 10;
      axis2['strictMinMax'] = true;
      axis2.renderer.labels.template.disabled = true;
      axis2.renderer.ticks.template.disabled = true;
      axis2.renderer.grid.template.disabled = true;

      const range0 = axis2.axisRanges.create();
      range0['value'] = 0;
      range0['endValue'] = 50;
      range0.axisFill.fillOpacity = 1;
      range0.axisFill.fill = '#2196f3' as any;

      const range1 = axis2.axisRanges.create();
      range1['value'] = 50;
      range1['endValue'] = 100;
      range1.axisFill.fillOpacity = 1;
      range1.axisFill.fill = '#eff3f6' as any;


      const label = chart.radarContainer.createChild(am4core.Label);
      label.isMeasured = false;
      label.fontSize = 18;
      label.x = am4core.percent(50);
      label.y = am4core.percent(100);
      label.horizontalCenter = 'middle';
      label.verticalCenter = 'bottom';
      label.text = '50%';

      const label2 = chart.radarContainer.createChild(am4core.Label);
      label2.isMeasured = false;
      label2.fontSize = 12;
      label2.x = am4core.percent(50);
      label2.y = am4core.percent(100);
      label2.horizontalCenter = 'middle';
      label2.align = 'center';
      label2.verticalCenter = 'top';
      label2.text = 'Complited Ticket';

      const hand = chart.hands.push(new am4charts.ClockHand());
      hand.axis = axis2 as any;
      hand.innerRadius = am4core.percent(20);
      hand.startWidth = 0;
      hand.pin.disabled = true;
      hand.value = 50;
      hand.disabled = true;

      hand.events.on('propertychanged', function(ev) {
        range0['endValue'] = ev.target.value;
        range1['value'] = ev.target.value;
        axis2.invalidate();
      });
      setInterval(() => {
        const value = Math.round(Math.random() * 100);
        label.text = value + '%';
        const animation = new am4core.Animation(hand, {
          property: 'value',
          to: value
        }, 1000, am4core.ease.cubicOut).start();
      }, 2000);
      chart.padding(0, 0, 0, 0);

      this.chart = chart;
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
