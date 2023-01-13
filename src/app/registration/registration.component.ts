import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),this.mustMatchValidator]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),this.mustMatchValidator]],
    gender: [''],
    age: ['',[ Validators.required,this.ageValidator]],
    phone: ['', [Validators.pattern(/^[789]\d{9,9}$/)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['',Validators.minLength(5)]
    })
  },
  //  { validators: [this.ageValidation] }
   );

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar)  { }

  get firstName() { return this.registrationForm.get("firstName") }

  get lastName() { return this.registrationForm.get("lastName") }

  get email() { return this.registrationForm.get("email") }

  get phone() { return this.registrationForm.get("phone"); }

  get password() { return this.registrationForm.get("password"); }

  get confirmPassword() { return this.registrationForm.get("confirmPassword"); }

  get age() { return this.registrationForm.get("age"); }
  get zip() { return this.registrationForm.get("zip"); }
  
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.registrationForm.value);
    
    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
     this.registrationForm.reset();
    }

  mustMatchValidator(fg: AbstractControl) {
    console.log(fg.get("password")?.value);
    
    const passwordValue = fg.get("password")?.value.toString();
    const confirmPasswordValue = fg.get("confirmPassword")?.value.toString();
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
        return { mustMatch: false }
    }
    return null;
  }
    
  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value < 18) {
      return { 'ageValid': false };
    }
    return null;
  }
}
 

