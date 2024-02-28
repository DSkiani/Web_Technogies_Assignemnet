import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllWeatherComponent } from './all-weather.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: "", component: AllWeatherComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AllWeatherRoutingModule { }
