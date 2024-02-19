import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-representation',
  templateUrl: './map-representation.component.html',
  styleUrls: ['./map-representation.component.scss']
})
export class MapRepresentationComponent {
  map: any;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([51.5, -0.09]).addTo(this.map)
      .bindPopup('A sample location.')
      .openPopup();
  }
}
