import { Component } from '@angular/core';
import {IconMoonComponent} from '../ui/svg/icon-moon/icon-moon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IconMoonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
