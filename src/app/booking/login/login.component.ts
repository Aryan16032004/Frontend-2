import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



interface UserData {
  username?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm:FormGroup;

registeredUserData: UserData | null = null; // Stores registered user data



constructor( private fb: FormBuilder,
  private router: Router,
  private snackBar: MatSnackBar)
 {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });



  const storedData = localStorage.getItem('registeredUserData');
    if (storedData) {
      this.registeredUserData = JSON.parse(storedData);
    }
  }

toggleForm() {
  this.router.navigate(['/register']);
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
register(){

}


// Replace this placeholder with a secure password comparison function
// that uses hashing or encryption to protect user passwords
}
