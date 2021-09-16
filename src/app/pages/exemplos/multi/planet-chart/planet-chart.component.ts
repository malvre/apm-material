import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-chart',
  templateUrl: './planet-chart.component.html',
  styleUrls: ['./planet-chart.component.scss'],
})
export class PlanetChartComponent implements OnInit {
  @Input() data!: any[];

  dataChart: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.data.forEach((planet) => {
      this.dataChart.push({
        name: planet.planet,
        value: planet.diameter,
      });
    });
  }
}
