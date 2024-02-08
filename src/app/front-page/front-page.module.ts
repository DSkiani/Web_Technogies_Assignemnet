import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeekWeatherForecastComponent } from './week-weather-forecast/week-weather-forecast.component';
import { CurrentWeatherMapComponent } from './current-weather-map/current-weather-map.component';
import { TodayHourlyWeatherForecastComponent } from './today-hourly-weather-forecast/today-hourly-weather-forecast.component';



@NgModule({
  declarations: [
    CurrentWeatherComponent,
    WeekWeatherForecastComponent,
    CurrentWeatherMapComponent,
    TodayHourlyWeatherForecastComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrontPageModule { }
