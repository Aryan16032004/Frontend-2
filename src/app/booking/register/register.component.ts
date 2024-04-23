import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavbarComponent } from '../navbar/navbar.component';

interface UserData {
  username?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loginForm:FormGroup;
  registerForm:FormGroup;
  registeredUserData: UserData | null = null; // Stores registered user data

  activeForm: 'login' | 'register' = 'register';

  constructor( private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar)
   {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    const storedData = localStorage.getItem('registeredUserData');
      if (storedData) {
        this.registeredUserData = JSON.parse(storedData);
      }
    }

  toggleForm() {
    this.router.navigate(['/login']);
  }

  login() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      if (this.registeredUserData && this.registeredUserData.email === loginData.email &&
          // Implement secure password comparison (e.g., using a hashing/encryption function)
          this.registeredUserData.password === loginData.password) { // Placeholder for secure comparison
        console.log('Login successful!');
        this.snackBar.open('Login successful!', 'Close', { duration: 1500 });
        this.router.navigate(['/home']);
      } else {
        this.snackBar.open('Invalid email or password!', 'Close', { duration: 3000 });
      }
    }
  }
  register() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.registeredUserData = registerData; // Store registered user data temporarily (replace with a more secure mechanism)
      localStorage.setItem('registeredUserData', JSON.stringify(registerData));
      console.log('Registration successful!');
      this.snackBar.open('Registration successful!', 'Close', { duration: 1500 });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/login']);

      // Clear the login form to avoid pre-filled values
      this.loginForm.reset();

      // Optional: Navigate to a different route after successful registration (e.g., a confirmation page)
      // this.router.navigate(['/confirmation']);
    } else {
      this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 3000 });
    }
}
}
