import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateOfBirthValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  const today = new Date();
  const dob = new Date(value);

  return dob < today ? null : { dobInvalid: true };
}

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  // Robust email regex (covers most valid formats)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(value) ? null : { invalidEmail: true };
}
