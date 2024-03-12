import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuBarModule } from '../menu/menu-bar.module';
import { FrontPageComponent } from './front-page.component';
import { FrontPageModule } from './front-page.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FrontPageComponent', () => {
  let component: FrontPageComponent;
  let fixture: ComponentFixture<FrontPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontPageComponent],
      imports: [MenuBarModule, FrontPageModule, HttpClientModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(FrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
