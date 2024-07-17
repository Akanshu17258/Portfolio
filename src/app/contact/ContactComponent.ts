import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

/**
 * Contact Component for handling contact form functionality.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: NgModel;
  @ViewChild('emailField') emailField!: NgModel;
  @ViewChild('messageField') messageField!: NgModel;
  @ViewChild('contact') contact!: ElementRef;

  /** Flag indicating whether the form is active or not. */
  formActive: boolean = false;
  test = true
  messageSent!: boolean;
  emailRegex: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\u0022(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\u0022)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  /** Form data object with default values. */
  formData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false
  };

  /** Object to track the validation status of each form field. */
  fieldStatus: any = {
    name: false,
    email: false,
    message: false,
    privacyPolicy: false,
    allFieldsValid: false
  };
constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Initialize AOS only if on the client side
    }
  }

  /**
   * Asynchronously sends mail, disables form during the process,
   * and resets form inputs after completion.
   */
  sendMail() {
  }

  /** Disables form fields. */
  disableForm() {
    this.nameField.control.disable();
    this.emailField.control.disable();
    this.messageField.control.disable();
  }

  /** Enables form fields. */
  enableForm() {
    this.nameField.control.enable();
    this.emailField.control.enable();
    this.messageField.control.enable();
  }

  
  /** Updates the allFieldsValid status based on individual field statuses. */
  updateAllFieldsValid() {
    if (this.fieldStatus.name && this.fieldStatus.email && this.fieldStatus.message && this.fieldStatus.privacyPolicy) {
      this.fieldStatus.allFieldsValid = true;
    } else {
      this.fieldStatus.allFieldsValid = false;
    }
  }

  /** Resets form inputs, form status, and deactivates form validation. */
  resetInputs() {
    this.formData = {
      name: '',
      email: '',
      message: '',
      privacyPolicy: false
    };

    this.fieldStatus = {
      name: false,
      email: false,
      message: false,
      privacyPolicy: false,
      allFieldsValid: false
    };
    this.formActive = false;
  }

  /** Activates form validation. */
  activateValidation() {
    this.formActive = true;
  }
}
