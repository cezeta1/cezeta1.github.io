import { inject } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';

export const themeInitializer = () => {
  const themeService = inject(ThemeService);
  themeService.loadTheme();
}


// export const AppInitializerProvider = {
//   provide: APP_INITIALIZER,
//   useFactory: ,
//   deps: [ThemeService],
//   multi: true,
// };