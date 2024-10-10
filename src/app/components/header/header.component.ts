import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconMoonComponent} from '../ui/svg/icon-moon/icon-moon.component';
import {Theme} from '../../../types/theme';

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
  @Input() theme: Theme;
  @Output() toggleTheme = new EventEmitter<Theme>();

  toggle() {
    this.toggleTheme.emit(this.theme);
  }
}
