import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayHourlyWeatherForecastComponent } from './today-hourly-weather-forecast.component';

describe('TodayHourlyWeatherForecastComponent', () => {
  let component: TodayHourlyWeatherForecastComponent;
  let fixture: ComponentFixture<TodayHourlyWeatherForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayHourlyWeatherForecastComponent]
    });
    fixture = TestBed.createComponent(TodayHourlyWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
