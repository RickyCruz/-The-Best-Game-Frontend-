import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnDestroy {

  @Input() data: ({ name: string, value: number})[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  constructor() { }

  onSelect(event: any) {
    // console.log(event);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

}
