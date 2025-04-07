import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/themes/theme.service';
import { Toast } from 'primeng/toast';
import { LanguageService } from './core/services/language/language.service';
import { Chip } from 'primeng/chip';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Toast, 
    Chip
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private _languageService = inject(LanguageService);
  private _themeService = inject(ThemeService);
  
  protected env = env;

  ngOnInit(): void {
    this._languageService.initializeAppLanguage();
    this._themeService.initializeAppTheme();
  }
}
