import { Routes } from '@angular/router';
import { AppRoutesEnum } from '../../app.routes';
import { ProjectsComponent } from './projects.component';

export enum ExampleRoutesEnum {
  Home = ''
}

export const sectionRoutes: Routes = [

  // --- Content --- //

  { path: ExampleRoutesEnum.Home, component: ProjectsComponent, pathMatch: 'full' },

  // --- Wildcard --- //

  { path: '**', redirectTo: `/${AppRoutesEnum.NotFound}` }
]
