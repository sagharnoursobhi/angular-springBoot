import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  errorMessage: string | undefined;

  constructor() {
    this.errorMessage = "Some Error Happened!";
  }
}
