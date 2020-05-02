import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnDestroy {

  data: any[] = [
    {
      "name": "Game 1",
      "value": 8940000
    },
    {
      "name": "Game 2",
      "value": 5000000
    },
    {
      "name": "Game 3",
      "value": 7200000
    },
    {
      "name": "Game 4",
      "value": 6660000
    }
  ];

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

  // interval;

  constructor() {
    // this.interval = setInterval(() => {
    //   console.log('Tick');

    //   const newData = [...this.data];

    //   for(let i in newData) {
    //     newData[i].value = Math.round(Math.random() * 500);
    //   }

    //   this.data = [...newData];
    // }, 1500);
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

}
