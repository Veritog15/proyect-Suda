import { Component } from '@angular/core';
import { Button2Component } from '../../../components/button2/button2.component';
import { CarouselimgComponent } from '../../../components/carouselimg/carouselimg.component';
import { HeadComponent } from '../../../components/head/head.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button2Component, CarouselimgComponent, HeadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
