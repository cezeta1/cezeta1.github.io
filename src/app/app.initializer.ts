import { inject } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';
import { LanguageService } from './core/services/language/language.service';

export const themeInitializer = () => {
  const themeService = inject(ThemeService);
  const languageService = inject(LanguageService);

  themeService.loadTheme();
  languageService.initializeAppLanguage();
}