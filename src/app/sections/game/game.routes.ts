import { Routes } from '@angular/router';
import { AppRoutesEnum } from '../../app.routes';
import { GameComponent } from './game.component';

export enum ExampleRoutesEnum {
  Home = ''
}

export const sectionRoutes: Routes = [
  
  { path: '', redirectTo: ExampleRoutesEnum.Home, pathMatch: 'full' },

  // --- Content --- //
  
  { path: ExampleRoutesEnum.Home, component: GameComponent },

  // --- Wildcard --- //
  
  { path: '**', redirectTo: AppRoutesEnum.NotFound }
]