import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import {
  dateOfBirthValidator,
  emailValidator,
} from './validators/custom-validators';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        emailValidator,
      ]),
      dob: new FormControl(null, dateOfBirthValidator),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data', this.userForm);
      alert('Submitted');
    }
  }
}
