import { Component } from '@angular/core';
import { HeadComponent } from '../../../components/head/head.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-thematic',
  standalone: true,
  imports: [HeadComponent, FooterComponent],
  templateUrl: './thematic.component.html',
  styleUrl: './thematic.component.css'
})
export class ThematicComponent {

}
