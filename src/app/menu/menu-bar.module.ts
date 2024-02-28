import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';
import { AllWeatherModule } from '../all-weather/all-weather.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    AllWeatherModule,
    AppRoutingModule
  ],
  exports: [
    MenuBarComponent
  ]
})
export class MenuBarModule { }
