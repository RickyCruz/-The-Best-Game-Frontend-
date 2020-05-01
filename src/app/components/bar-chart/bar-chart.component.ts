import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

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

  constructor() { }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit() {
  }

}
