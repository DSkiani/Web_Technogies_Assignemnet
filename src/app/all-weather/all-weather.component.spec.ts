import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllWeatherComponent } from './all-weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AllWeatherComponent', () => {
  let component: AllWeatherComponent;
  let fixture: ComponentFixture<AllWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllWeatherComponent],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(AllWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
