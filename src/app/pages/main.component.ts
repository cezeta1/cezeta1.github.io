import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CzLayoutComponent } from '../core/layout/layout.component';
import { LanguageService } from '../core/services/language/language.service';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    CzLayoutComponent,
  ],
  template: `
    <cz-layout class="h-full">
      <router-outlet></router-outlet>
    </cz-layout>
  `
})
export class MainComponent {
  private _languageService = inject(LanguageService);

  constructor() {
    this._languageService.initializeAppLanguage();
  }
}