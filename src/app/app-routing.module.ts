import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AllWeatherComponent } from './all-weather/all-weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default redirect to home
  { path: 'home', component: FrontPageComponent },
  { path: 'all', component: AllWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
