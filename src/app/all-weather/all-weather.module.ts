import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllWeatherComponent } from './all-weather.component';
import { AllWeatherRoutingModule } from './all-weather-routing.module';


@NgModule({
  declarations: [
    AllWeatherComponent
  ],
  imports: [
    CommonModule,
    AllWeatherRoutingModule
  ],
  exports: [
    AllWeatherComponent
  ]
})
export class AllWeatherModule { }
