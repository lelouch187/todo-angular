import { Injectable } from '@angular/core';
import {Theme} from '../../types/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme:Theme = Theme.LIGHT;

  getTheme() {
    return this.theme;
  }


}
