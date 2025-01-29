import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withHashLocation } from '@angular/router';

import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";

import { routes } from './app.routes';
import { CzMissingTranslationHandler } from './core/services/language/cz-missing-translation.handler';

const httpLoaderFactory: (http: HttpClient) => 
  TranslateHttpLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideZoneChangeDetection({ eventCoalescing: true }), 

    provideRouter(routes, withHashLocation()), 
    NG_EVENT_PLUGINS,
    
    provideHttpClient(
      withFetch(),
      // withInterceptors([
      //   httpLoggingInterceptor,
      //   httpAuthInterceptor
      // ])
    ),

    importProvidersFrom([
      
      // --- i18n --- //

      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
        missingTranslationHandler: { 
          provide: MissingTranslationHandler, 
          useClass: CzMissingTranslationHandler 
        },
      })
    ]),
  ]
};