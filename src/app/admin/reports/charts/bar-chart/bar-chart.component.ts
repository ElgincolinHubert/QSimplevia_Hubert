import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true 
  };
  public ChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public ChartType = 'line';
  public ChartLegend = true;
  public ChartData = [
    {data: [65, 59, 80, 81, 56], label: "Mayor's Office", fill: false},
    {data: [43, 13, 73, 64, 69], label: "Vice Mayor's Office", fill: false},
    {data: [63, 35, 71, 23, 36], label: "Administrator's Office", fill: false},
    {data: [25, 23, 89, 34, 25], label: "Accounting Office", fill: false},
    {data: [32, 75, 42, 64, 39], label: "Treasurer's Office", fill: false},
    {data: [16, 42, 84, 56, 63], label: "Budget Office", fill: false},
    {data: [84, 65, 38, 34, 33], label: "Assesor's Office", fill: false},
    {data: [44, 53, 62, 22, 54], label: "Civil Registrar's Office", fill: false},
    {data: [47, 17, 44, 53, 74], label: "City Health Office", fill: false}
  ];
  
  ngOnInit() {
  }

}
