import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuBarModule } from '../menu/menu-bar.module';
import { FrontPageComponent } from './front-page.component';
import { FrontPageModule } from './front-page.module';

describe('FrontPageComponent', () => {
  let component: FrontPageComponent;
  let fixture: ComponentFixture<FrontPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontPageComponent],
      imports: [MenuBarModule, FrontPageModule]
    });
    fixture = TestBed.createComponent(FrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
