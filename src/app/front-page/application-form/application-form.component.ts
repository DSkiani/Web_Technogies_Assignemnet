import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  city: string = '';

  public getJSONValue: any;
  public cities: any; // Array to hold city names

  constructor(private http: HttpClient) { }

  submitForm() {
    console.log('City:', this.city);
    // Here you can perform any action with the form data, like submitting it to a server.
  }

  ngOnInit(): void {
    this.getMethod();
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
