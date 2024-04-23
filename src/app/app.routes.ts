import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   {path:'',loadChildren:()=> import('./booking/booking.module').then(m=> m.BookingModule)}
];


