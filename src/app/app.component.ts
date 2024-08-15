import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { ScrollComponent } from '../components/scroll/scroll.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CarouselimgComponent } from '../components/carouselimg/carouselimg.component';
import { HeadComponent } from '../components/head/head.component';
import { HomeComponent } from "./pages/home/home.component";
import { InformationComponent } from './pages/information/information.component';
import { ThematicComponent } from './pages/thematic/thematic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ScrollComponent, HeadComponent, CarouselimgComponent, HeadComponent, HomeComponent, InformationComponent,ThematicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyect-Suda';
}
