import { Routes } from '@angular/router';
import { AppRoutesEnum } from '../../app.routes';
import { ExampleComponent } from './example.component';

export enum ExampleRoutesEnum {
  Main = ''
}

export const sectionRoutes: Routes = [
  
  { path: '', redirectTo: ExampleRoutesEnum.Main, pathMatch: 'full' },

  // --- Content --- //
  
  { path: ExampleRoutesEnum.Main, component: ExampleComponent },

  // --- Wildcard --- //
  
  { path: '**', redirectTo: AppRoutesEnum.NotFound }
]