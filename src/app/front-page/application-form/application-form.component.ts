import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  submitForm() {
    if (this.city.trim() === '') {
      console.log('Please select a city');
      return;
    }

    // Make HTTP request to backend API endpoint with selected city
    this.http.get(`http://localhost:8080/home/findByCity/${this.city}`).subscribe((data: any) => {
      console.log(data);
      this.weatherData = data;
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