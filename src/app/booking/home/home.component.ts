import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent,RouterLink,RouterModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
