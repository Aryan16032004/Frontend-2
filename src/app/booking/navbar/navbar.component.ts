import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private router: Router) {
    const storedData = localStorage.getItem('isLoggedIn');
    if (storedData) {
      this.isLoggedIn = JSON.parse(storedData); // Convert stored string to boolean
      this.username = localStorage.getItem('username') || ''; // Retrieve username from localStorage
    }
  }

  home() {
    this.router.navigate(['/home']);
  }
  room() {
    this.router.navigate(['/room']);
  }
  facilities() {
    this.router.navigate(['/facilities']);
  }
  contact() {
    this.router.navigate(['/contact']);
  }
  about() {
    this.router.navigate(['/about']);
  }
  login() {
    this.isLoggedIn = true;
    this.username = localStorage.getItem('username') || ''; // Update username
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.router.navigate(['/login']);
  }
  register() {
    this.isLoggedIn = true;
    this.username = localStorage.getItem('username') || ''; // Update username
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.router.navigate(['/register']);
  }
  logout() {
    this.isLoggedIn = false;
    this.username = ''; // Clear username
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username'); // Remove username from localStorage
    this.router.navigate(['/login']);
  }
}
