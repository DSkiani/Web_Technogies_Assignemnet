import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRepresentationComponent } from './map-representation.component';

describe('MapRepresentationComponent', () => {
  let component: MapRepresentationComponent;
  let fixture: ComponentFixture<MapRepresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapRepresentationComponent]
    });
    fixture = TestBed.createComponent(MapRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
