import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherMapComponent } from './current-weather-map.component';

describe('CurrentWeatherMapComponent', () => {
  let component: CurrentWeatherMapComponent;
  let fixture: ComponentFixture<CurrentWeatherMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherMapComponent]
    });
    fixture = TestBed.createComponent(CurrentWeatherMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
