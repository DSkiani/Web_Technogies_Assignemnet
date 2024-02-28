import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { MapRepresentationComponent } from './map-representation/map-representation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentLocationComponent } from './current-location/current-location.component';
import { FrontPageComponent } from './front-page.component';
import { FooterModule } from '../footer/footer.module';
import { MenuBarModule } from '../menu/menu-bar.module';
import { AllWeatherModule } from '../all-weather/all-weather.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ApplicationFormComponent,
    MapRepresentationComponent,
    CurrentLocationComponent,
    FrontPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FooterModule,
    MenuBarModule,
    AllWeatherModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ApplicationFormComponent,
    MapRepresentationComponent,
    CurrentLocationComponent
  ]
})
export class FrontPageModule { }
