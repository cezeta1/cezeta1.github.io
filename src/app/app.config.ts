import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, provideAppInitializer, inject } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { ThemeService } from './core/services/theme/theme.service';
import { themeInitializer } from './app.initializer';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => themeInitializer()),
    
    provideAnimationsAsync(), 
    provideZoneChangeDetection({ 
      eventCoalescing: true 
    }), 

    provideHttpClient(),
    provideRouter(routes, withHashLocation()),
    
    // ng-zorro-antd
    provideNzI18n(en_US), 
  ]
};