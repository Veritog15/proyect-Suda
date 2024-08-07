import { Component } from '@angular/core';
import { TextComponent } from '../../components/text/text.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
