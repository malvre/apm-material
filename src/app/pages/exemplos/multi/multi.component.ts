import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss'],
})
export class MultiComponent implements OnInit {
  planets = [
    {
      planet: 'Mercury',
      moons: 0,
      diameter: 4879,
      distanceFromSun: 57.9,
      image: 'https://www.go-astronomy.com/images/planets/planet-mercury.jpg',
    },
    {
      planet: 'Venus',
      moons: 0,
      diameter: 12104,
      distanceFromSun: 108.2,
      image:
        'https://surrealsciencestuff.files.wordpress.com/2014/09/planets3.jpg',
    },
    {
      planet: 'Earth',
      moons: 1,
      diameter: 12756,
      distanceFromSun: 149.6,
      image: 'https://cdn.britannica.com/700x450/25/160325-004-AD594C66.jpg',
    },
    {
      planet: 'Mars',
      moons: 0,
      diameter: 6792,
      distanceFromSun: 227.9,
      image: 'https://d.ibtimes.co.uk/en/full/403889/planet-mars.jpg',
    },
    {
      planet: 'Jupiter',
      moons: 67,
      diameter: 142984,
      distanceFromSun: 778.6,
      image:
        'https://www.cool2bkids.com/wp-content/uploads/2014/05/Jupiter-Picture.jpg',
    },
    {
      planet: 'Saturn',
      moons: 62,
      diameter: 120536,
      distanceFromSun: 1433.5,
      image:
        'https://www.yourdictionary.com/images/definitions/lg/8616.saturn.jpg',
    },
    {
      planet: 'Uranus',
      moons: 27,
      diameter: 51118,
      distanceFromSun: 2872.5,
      image: 'https://www.startrekdb.se/astronomi/bilder/uranus2.jpg',
    },
    {
      planet: 'Neptune',
      moons: 14,
      diameter: 49528,
      distanceFromSun: 4495.1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1200px-Neptune_Full.jpg',
    },
    {
      planet: 'Pluto(Dwarf-Planet)',
      moons: 5,
      diameter: 2370,
      distanceFromSun: 5906.4,
      image:
        'https://www.nasa.gov/sites/default/files/thumbnails/image/tn-p_lorri_fullframe_color.jpg',
    },
  ];

  selectedPlanet: any;

  constructor() {}

  ngOnInit(): void {}

  selectPlanet(data: any) {
    this.selectedPlanet = {
      planet: data.planet,
      image: data.image,
    };
  }
}
