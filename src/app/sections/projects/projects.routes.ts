import { Routes } from '@angular/router';
import { AppRoutesEnum } from '../../app.routes';
import { ProjectsComponent } from './projects.component';

export enum ExampleRoutesEnum {
  Home = ''
}

export const sectionRoutes: Routes = [
  
  { path: '', redirectTo: ExampleRoutesEnum.Home, pathMatch: 'full' },

  // --- Content --- //
  
  { path: ExampleRoutesEnum.Home, component: ProjectsComponent },

  // --- Wildcard --- //
  
  { path: '**', redirectTo: AppRoutesEnum.NotFound }
]