import { Component } from '@angular/core';
import * as L from 'leaflet';
import { CityMapService } from 'src/app/city-map.service';

@Component({
  selector: 'app-map-representation',
  templateUrl: './map-representation.component.html',
  styleUrls: ['./map-representation.component.scss']
})
export class MapRepresentationComponent {
  map: any;

  constructor(private sharedService: CityMapService) { }

  ngOnInit(): void {
    this.initMap();

    // Subscribe to the coordinatesEmitter from the shared service
    this.sharedService.coordinatesEmitter.subscribe((coordinates: [number, number]) => {
      if (coordinates) {
        // If coordinates are available, update the map
        this.updateMap(coordinates);
      }
    });
  }

  initMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([51.5, -0.09]).addTo(this.map)
      .bindPopup('Please provide me with a location in the form above')
      .openPopup();
  }

  updateMap(coordinates: [number, number]) {
    // Check if coordinates are defined and valid
    if (coordinates && coordinates.length === 2 && !isNaN(coordinates[0]) && !isNaN(coordinates[1])) {
      // Set the view and add a marker with the coordinates
      this.map.setView(coordinates, 13);
      L.marker(coordinates).addTo(this.map);
    } else {
      console.error('Invalid coordinates:', coordinates);
    }
  }
}
