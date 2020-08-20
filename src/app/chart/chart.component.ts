import { Component, OnInit } from '@angular/core';
import{ Chart } from 'chart.js'
import { ProServiceService } from '../pro-service.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart;
  chartData;
  plotChart = [513, 1234, 1556, 2067, 2675, 3467];
  constructor(private covidService:ProServiceService) { }

  ngOnInit(): void {
    this.covidService.getData().subscribe(item =>{
      this.chartData = item;
       const totalPort = item['statewise'].map(res => res.active);
       const chartPort = item['statewise'].map(res => res.confirmed);
       const deathPort = item['statewise'].map(res => res.deaths);
       const recoverPort = item['statewise'].map(res => res.recovered);
       const labelPort = [];
       this.chart = new Chart('Canvas', {
        type: 'line',
        data: {
          labels: labelPort,
          datasets: [
            {
              label: 'Confirmed Cases',
              data: chartPort,
              backgroundColor: 'Orange',
              borderColor: 'Orange',
              fill: false,
            },
            {
              label: 'Active Cases',
              data: totalPort,
              backgroundColor: 'blue',
              borderColor: 'blue',
              fill: false,
            },
            {
            label: 'Deaths',
            data: deathPort,
            backgroundColor: 'Red',
            borderColor: 'Red',
            fill: true,
          },
          {
          label: 'Recoverd',
          data: recoverPort,
          backgroundColor: 'green',
          borderColor: 'green',
          fill: false,
        },
           ]},
          })
    })
  
  }
}