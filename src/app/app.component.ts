import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TUI_DARK_MODE, TuiRoot } from "@taiga-ui/core";
import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  templateUrl: './app.component.html'
})
export class AppComponent { 
  readonly isDarkMode = inject(TUI_DARK_MODE);
  private _languageService = inject(LanguageService);

  ngOnInit() {
    this._languageService.initializeAppLanguage();
  }
}
