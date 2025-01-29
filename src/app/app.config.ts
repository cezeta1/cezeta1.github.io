import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withHashLocation } from '@angular/router';
import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideZoneChangeDetection({ 
      eventCoalescing: true 
    }), 

    provideRouter(routes, withHashLocation()), 
    NG_EVENT_PLUGINS
  ]
};