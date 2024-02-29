import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityMapService } from 'src/app/city-map.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  city: string = '';
  weatherData: any;
  public getJSONValue: any;
  public cities: any; // Array to hold city names


  constructor(private http: HttpClient, private sharedService: CityMapService) { }

  submitForm() {
    if (this.city.trim() === '') {
      console.log('Please select a city');
      return;
    }

    // Make HTTP request to backend API endpoint with selected city
    this.http.get(`http://localhost:8080/home/findByCity/${this.city}`).subscribe((data: any) => {
      console.log(data); // Log the entire response to inspect its structure
      this.weatherData = data;

      // Check if the response data contains latitude and longitude properties
      if (data.Latitude !== undefined && data.Longitude !== undefined) {
        // Convert latitude and longitude strings to numbers
        const latitude = parseFloat(data.Latitude);
        const longitude = parseFloat(data.Longitude);

        // Log coordinates before emitting
        console.log('Coordinates:', [latitude, longitude]);

        // Emit coordinates
        this.sharedService.emitCoordinates([latitude, longitude]);
      } else {
        console.error('Latitude or longitude is undefined in the response data.');
      }
    });
  }
  ngOnInit(): void {
    this.getMethod(); // Call getMethod() during component initialization
  }

  public getMethod() {
    this.http.get('http://localhost:8080').subscribe((data: any) => {
      console.log(data);
      this.getJSONValue = data;
      // Extract city names from the JSON data
      this.cities = this.getJSONValue.weather_project.map((weather: any) => weather.City);
    });
  }
}
