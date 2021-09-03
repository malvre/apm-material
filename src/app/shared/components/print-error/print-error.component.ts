import { Component, Input, OnInit } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { FormValidations } from '../../form-validations'

@Component({
  selector: 'app-print-error',
  templateUrl: './print-error.component.html',
  styleUrls: ['./print-error.component.scss'],
})
export class PrintErrorComponent implements OnInit {
  @Input() control!: AbstractControl
  @Input() label!: string

  constructor() { }

  ngOnInit(): void { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return FormValidations.getErrorMsg(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        )
      }
    }

    return null
  }
}
