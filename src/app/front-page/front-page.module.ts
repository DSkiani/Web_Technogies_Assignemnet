import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { MapRepresentationComponent } from './map-representation/map-representation.component';



@NgModule({
  declarations: [
    ApplicationFormComponent,
    MapRepresentationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrontPageModule { }
