import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {Theme} from '../types/theme';
import {NgClass} from '@angular/common';

import {ThemeService} from './services/theme.service';
import {CreateFormComponent} from './components/create-form/create-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NgClass,
    CreateFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  theme: Theme;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.theme = this.themeService.getTheme();
  }

  toggleTheme(theme: Theme) {
    this.theme = this.theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  }

  protected readonly Theme = Theme;
}
