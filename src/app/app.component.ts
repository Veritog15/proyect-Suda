import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardOverviewExample } from "./components/cards/cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardOverviewExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyect-Suda';
}
