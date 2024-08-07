import { Component } from '@angular/core';
import { TextComponent } from '../../components/text/text.component';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TextComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
