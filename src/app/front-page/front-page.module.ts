import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { MapRepresentationComponent } from './map-representation/map-representation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApplicationFormComponent,
    MapRepresentationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ApplicationFormComponent]
})
export class FrontPageModule { }
