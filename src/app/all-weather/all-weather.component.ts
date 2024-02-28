import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-weather',
  templateUrl: './all-weather.component.html',
  styleUrls: ['./all-weather.component.scss']
})
export class AllWeatherComponent implements OnInit {

  public getJSONValue: any;
  public postJSONValue: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http.get('http://localhost:8080').subscribe((data) => {
      console.log(data);
      this.getJSONValue = data;
    });
  }

  public handleButtonClick() {
    // Navigate to /home route
    this.router.navigate(['/home']);
  }
}
