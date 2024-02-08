import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekWeatherForecastComponent } from './week-weather-forecast.component';

describe('WeekWeatherForecastComponent', () => {
  let component: WeekWeatherForecastComponent;
  let fixture: ComponentFixture<WeekWeatherForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekWeatherForecastComponent]
    });
    fixture = TestBed.createComponent(WeekWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
