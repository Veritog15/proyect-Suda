import { Component } from '@angular/core';
import { TextComponent } from '../../../components/text/text.component';
import { CardsComponent } from '../../../components/cards/cards.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { Button2Component } from '../../../components/button2/button2.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TextComponent, CardsComponent, ButtonComponent, Button2Component],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
