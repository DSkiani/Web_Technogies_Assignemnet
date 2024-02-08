import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormSubmissionComponent } from './data-form-submission.component';

describe('DataFormSubmissionComponent', () => {
  let component: DataFormSubmissionComponent;
  let fixture: ComponentFixture<DataFormSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataFormSubmissionComponent]
    });
    fixture = TestBed.createComponent(DataFormSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
