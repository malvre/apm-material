import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
})
export class PlanetListComponent implements OnInit {
  @Input() data: any = [];
  @Output() onSelect = new EventEmitter<any>();

  selectedPlanet: any;

  constructor() {}

  ngOnInit(): void {}

  selectPlanet(planet: any) {
    this.selectedPlanet = {
      planet: planet.planet,
      image: planet.image,
    };
    this.onSelect.emit(this.selectedPlanet);
  }
}
