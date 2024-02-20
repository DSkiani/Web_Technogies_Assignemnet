import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { MapRepresentationComponent } from './map-representation/map-representation.component';
import { FormsModule } from '@angular/forms';
import { CurrentLocationComponent } from './current-location/current-location.component';


@NgModule({
  declarations: [
    ApplicationFormComponent,
    MapRepresentationComponent,
    CurrentLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ApplicationFormComponent,
    MapRepresentationComponent,
    CurrentLocationComponent
  ]
})
export class FrontPageModule { }
