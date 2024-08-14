import { Component } from '@angular/core';
import { Button2Component } from "../../../components/button2/button2.component";
import { CarouselimgComponent } from "../../../components/carouselimg/carouselimg.component";

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [Button2Component, CarouselimgComponent],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {

}
