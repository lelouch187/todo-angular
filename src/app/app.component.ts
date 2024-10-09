import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {Theme} from '../types/theme';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  theme:Theme=Theme.LIGHT;

}
