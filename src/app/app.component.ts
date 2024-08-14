import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { ScrollComponent } from '../components/scroll/scroll.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { CarouselimgComponent } from '../components/carouselimg/carouselimg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,ScrollComponent, MobileComponent, CarouselimgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyect-Suda';
}
