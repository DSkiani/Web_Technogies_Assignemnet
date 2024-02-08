import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataFormSubmissionComponent } from './data-form-submission/data-form-submission.component';
import { DialogPopupComponent } from './data-form-submission/dialog-popup/dialog-popup.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    DataFormSubmissionComponent,
    DialogPopupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OptInModule { }
