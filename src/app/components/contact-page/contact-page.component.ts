import { Component } from '@angular/core';
import { FormGroup,FormControl , Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {


  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;
  occupationInput: FormControl;
  subjectInput: FormControl;
  contentInput: FormControl;
  constructor() {
    
    this.nameInput = new FormControl("", Validators.required);
    this.emailInput = new FormControl("", [Validators.required, Validators.email]);
    this.occupationInput = new FormControl("");
    this.subjectInput = new FormControl("", Validators.required);
    this.contentInput = new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(255)]);

    this.registerForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      occupation: this.occupationInput,
      subject: this.subjectInput,
      content: this.contentInput,
    })
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      
      console.log('Form submitted!', this.registerForm.value);
      alert("success massages")
      this.registerForm.reset(); 
    } else {
      // Highlight invalid fields and show error messages
      this.registerForm.markAllAsTouched();  
  }
  }}