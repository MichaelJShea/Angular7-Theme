import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-crt-nvd3',
  templateUrl: './crt-nvd3.component.html',
  styleUrls: [
    './crt-nvd3.component.scss',
    '../../../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CrtNvd3Component implements OnInit {
  lineChartOptions: any;
  lineChartData: any;
  discreteBarOptions: any;
  discreteBarData: any;
  stackedMultiBarOptions: any;
  stackedMultiBarData: any;
  pieChartOption: any;
  pieChartData: any;
  donutChartOption: any;
  donutChartData: any;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.lineChartOptions = {
        chart: {
          type: 'lineChart',
          height: 400,
          margin: {
            top: 50,
            left: 100
          },
          useInteractiveGuideline: true,
          showLegend: true,
          showYAxis: true,
          showXAxis: true,
          x: (d) => {
            return d.x;
          },
          y: (d) => {
            return d.y;
          },
          xAxis: {
            axisLabel: 'Time (ms)',
            tickFormat: (d) => {
              return d3.format(',r')(d);
            },
          },
          yAxis: {
            axisLabel: 'Voltage (v)',
            tickFormat: (d) => {
              return d3.format('.02f')(d);
            }
          }
        }
      };
      this.lineChartData = this.sinAndCos();
      this.discreteBarOptions = {
        chart: {
          type: 'discreteBarChart',
          height: 400,
          x: (d) => {
            return d.label;
          },
          y: (d) => {
            return d.value;
          },
          staggerLabels: true,
          showValues: true
        }
      };
      this.discreteBarData = [{
        key: 'Cumulative Return',
        values: [{
          label: 'A',
          value: -29.765957771107,
          color: '#3ebfea'
        }, {
          label: 'B',
          value: 10,
          color: '#f44336'
        }, {
          label: 'C',
          value: 32.807804682612,
          color: '#FF9800'
        }, {
          label: 'D',
          value: 196.45946739256,
          color: '#2196f3'
        }, {
          label: 'E',
          value: 0.25434030906893,
          color: '#f44336'
        }, {
          label: 'F',
          value: -98.079782601442,
          color: '#7759de'
        }, {
          label: 'G',
          value: -13.925743130903,
          color: '#4caf50'
        }, {
          label: 'H',
          value: -5.1387322875705,
          color: '#00ACC1'
        }]
      }];
      this.stackedMultiBarOptions = {
        chart: {
          type: 'multiBarChart',
          height: 400,
          reduceXTicks: true,
          rotateLabels: 0,
          showControls: true,
          groupSpacing: 0.1,
          color: ['#2196f3', '#7759de', '#4caf50'],
          xAxis: {
            tickFormat: (d) => {
              return d3.format(',f')(d);
            }
          },
          yAxis: {
            tickFormat: (d) => {
              return d3.format(',.1f')(d);
            }
          }
        }
      };
      this.stackedMultiBarData = this.generateDataMultiBar();
      this.pieChartOption = {
        chart: {
          type: 'pieChart',
          height: 400,
          x: (d) => {
            return d.label;
          },
          y: (d) => {
            return d.value;
          },
          showLabels: true
        }
      };
      this.pieChartData = pieData();
      this.donutChartOption = {
        chart: {
          type: 'pieChart',
          height: 400,
          x: (d) => {
            return d.label;
          },
          y: (d) => {
            return d.value;
          },
          showLabels: true,
          labelThreshold: 0.05,
          labelType: 'percent',
          donut: true,
          donutRatio: 0.35
        }
      };
      this.donutChartData = pieData();
    }, 500);
  }

  sinAndCos = () => {
    const sin = [];
    const sin2 = [];
    const cos = [];

    for (let i = 0; i < 100; i++) {
      sin.push({x: i, y: Math.sin(i / 10)});
      sin2.push({x: i, y: Math.sin(i / 10) * 0.25 + 0.5});
      cos.push({x: i, y: .5 * Math.cos(i / 10)});
    }

    return [
      {
        values: sin,
        key: 'Sine Wave',
        color: '#7759de'
      },
      {
        values: cos,
        key: 'Cosine Wave',
        color: '#f44336'
      },
      {
        values: sin2,
        key: 'Another sine wave',
        color: '#2196f3',
        area: true
      }
    ];
  }

  generateDataMultiBar = () => {
    return streamLayers(3, 50 + Math.random() * 50, .1).map((data, i) => {
      return {
        key: 'Stream' + i,
        values: data
      };
    });
  }

}

function streamLayers(n, m, o) {
  if (arguments.length < 3) {
    o = 0;
  }

  function bump(a) {
    const x = 1 / (.1 + Math.random());
    const y = 2 * Math.random() - .5;
    const z = 10 / (.1 + Math.random());
    for (let i = 0; i < m; i++) {
      const w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }

  return d3.range(n).map(() => {
    const a = [];
    let i;
    for (i = 0; i < m; i++) {
      a[i] = o + o * Math.random();
    }
    for (i = 0; i < 5; i++) {
      bump(a);
    }
    return a.map(streamIndex);
  });
}

function streamIndex(d, i) {
  return {x: i, y: Math.max(0, d)};
}

function pieData() {
  return [{
    label: 'One',
    value: 29.765957771107,
    color: '#FF9800'
  }, {
    label: 'Two',
    value: 0,
    color: '#f44336'
  }, {
    label: 'Three',
    value: 32.807804682612,
    color: '#7759de'
  }, {
    label: 'Four',
    value: 196.45946739256,
    color: '#2196f3'
  }, {
    label: 'Five',
    value: 0.19434030906893,
    color: '#00ACC1'
  }, {
    label: 'Six',
    value: 98.079782601442,
    color: '#4caf50'
  }, {
    label: 'Seven',
    value: 13.925743130903,
    color: '#ff8a65'
  }, {
    label: 'Eight',
    value: 5.1387322875705,
    color: '#f44336'
  }];
}
