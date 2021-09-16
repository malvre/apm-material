import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
