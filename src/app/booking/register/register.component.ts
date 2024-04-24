import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface UserData {
  username?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm:FormGroup;
  registeredUserData: UserData | null = null; // Stores registered user data
  username: string = '';


  constructor( private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar)
   {

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,]],
      password: ['', Validators.required,]
    });

    const storedData = localStorage.getItem('registeredUserData');
      if (storedData) {
        this.registeredUserData = JSON.parse(storedData);
      }
    }

  toggleForm() {
    this.router.navigate(['/login']);
  }

  register() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.username = registerData.username;
      this.registeredUserData = registerData; // Store registered user data temporarily (replace with a more secure mechanism)
      localStorage.setItem('registeredUserData', JSON.stringify(registerData));
      localStorage.setItem('username', registerData.username);
      console.log('Registration successful!');
      this.snackBar.open('Registration successful!', 'Close', { duration: 1500 });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/login']);

      // Clear the login form to avoid pre-filled values

      // Optional: Navigate to a different route after successful registration (e.g., a confirmation page)
      // this.router.navigate(['/confirmation']);
    } else {
      this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 3000 });
    }
}
login(){

}
// gmailValidator(control: FormControl): { [key: string]: any } | null {
//   const email = control.value;
//   if (email && email.endsWith('@gmail.com')) {
//     return null; // Valid email
//   } else {
//     return { 'invalidEmail': true }; // Invalid email
//   }
// }

}
