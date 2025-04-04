import { Routes } from '@angular/router';
import { AppRoutesEnum } from '../../app.routes';
import { AboutMeComponent } from './about-me.component';

export enum ExampleRoutesEnum {
  Home = ''
}

export const sectionRoutes: Routes = [
  
  { path: '', redirectTo: ExampleRoutesEnum.Home, pathMatch: 'full' },

  // --- Content --- //
  
  { path: ExampleRoutesEnum.Home, component: AboutMeComponent },

  // --- Wildcard --- //
  
  { path: '**', redirectTo: AppRoutesEnum.NotFound }
]