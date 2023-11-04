import { Component, Input, OnInit } from '@angular/core'
import { BackendErrorsInterface } from '../types/bacendErrors.interface'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  standalone: true,
  imports: [CommonModule]

})
export class BackendErrorMessage implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {}

  errorMessages: string[] = [];

  ngOnInit() {

    console.log(this.backendErrors)
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const message = this.backendErrors[name].join(' ')
      return `${name} ${message}`
    })
  }
}
