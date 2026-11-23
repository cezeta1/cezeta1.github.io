import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me.component';

export enum ExampleRoutesEnum {
  Home = ''
}

export const sectionRoutes: Routes = [

  // --- Content --- //

  { path: ExampleRoutesEnum.Home, component: AboutMeComponent, pathMatch: 'full' },

  // No wildcard here: this section is mounted at the app root, so unknown
  // paths must fall through to the app-level routes (not-found, error).
]
