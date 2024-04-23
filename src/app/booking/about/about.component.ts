import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {

}
