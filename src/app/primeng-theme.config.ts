import { PrimeNGConfigType } from "primeng/config";
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const AuraBlue = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    },
    colorScheme: {
      // dark: {
      //   surface: {
      //     0: '#ffffff',
      //     50: '{neutral.50}',
      //     100: '{neutral.100}',
      //     200: '{neutral.200}',
      //     300: '{neutral.300}',
      //     400: '{neutral.400}',
      //     500: '{neutral.500}',
      //     600: '{neutral.600}',
      //     700: '{neutral.700}',
      //     800: '{neutral.800}',
      //     900: '{neutral.900}',
      //     950: '{neutral.950}'
      //   }
      // }
    }
  }
});

export const primeNGThemeConfig: PrimeNGConfigType = {    
  theme: {
    preset: AuraBlue,
    options: {
      darkModeSelector: '.dark-theme',
      cssLayer: {
        name: 'primeng',
        order: 'tailwind-base, primeng, tailwind-utilities'
      }
    }
  }
};
