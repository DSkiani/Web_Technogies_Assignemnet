import { Component } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
  country: string = '';
  city: string = '';

  submitForm() {
    console.log('Country:', this.country);
    console.log('City:', this.city);
    // Here you can perform any action with the form data, like submitting it to a server.
  }
}
