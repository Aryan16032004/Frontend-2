import { Component } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [FooterComponent,NavbarComponent],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss'
})
export class FacilitiesComponent {

}
