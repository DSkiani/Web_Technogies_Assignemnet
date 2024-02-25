import { Component } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
  city: string = '';

  submitForm() {
    console.log('City:', this.city);
    // Here you can perform any action with the form data, like submitting it to a server.
  }
}
