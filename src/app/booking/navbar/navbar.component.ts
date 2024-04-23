import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
constructor(private router: Router){}

home(){
  this.router.navigate(['/home']);
}
room(){
  this.router.navigate(['/room']);
}
facilities(){
  this.router.navigate(['/facilities']);
}
contact(){
  this.router.navigate(['/contact']);
}
about(){
  this.router.navigate(['/about']);
}
login(){
  this.router.navigate(['/login']);
}
register(){
  this.router.navigate(['/register']);
}

}
