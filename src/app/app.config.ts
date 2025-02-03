import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, provideAppInitializer, inject } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { themeInitializer } from './app.initializer';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationHandler, TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { CzMissingTranslationHandler } from './core/services/language/missing-translations.handler';

registerLocaleData(en);

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => themeInitializer()),
    
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(), 
    provideZoneChangeDetection({ 
      eventCoalescing: true 
    }), 

    provideHttpClient(),

    importProvidersFrom([
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
        missingTranslationHandler: {
          provide: MissingTranslationHandler,
          useClass: CzMissingTranslationHandler,
        },
      })
    ]),
    
    // ng-zorro-antd
    provideNzI18n(en_US), 
  ]
};