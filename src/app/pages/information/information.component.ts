import { Component } from '@angular/core';
import { HeadComponent } from '../../../components/head/head.component';
import { Button2Component } from "../../../components/button2/button2.component";

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [HeadComponent, Button2Component],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}
