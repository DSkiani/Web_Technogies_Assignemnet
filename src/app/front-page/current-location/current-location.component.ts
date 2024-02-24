import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.scss']
})
export class CurrentLocationComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
}
