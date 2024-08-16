import { Component } from '@angular/core';
import { HeadComponent } from '../../../components/head/head.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-thematic',
  standalone: true,
  imports: [HeadComponent, FooterComponent, ButtonComponent],
  templateUrl: './thematic.component.html',
  styleUrl: './thematic.component.css'
})
export class ThematicComponent {

}
