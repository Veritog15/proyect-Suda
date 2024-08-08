import { Component } from '@angular/core';
import { TextComponent } from '../../components/text/text.component';
import { ButtonComponent } from "../../components/button/button.component";
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TextComponent, ButtonComponent, CardsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
