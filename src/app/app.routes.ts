import { Routes } from '@angular/router';
import { EmptyLayoutComponent } from './core/layouts/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { ErrorPageComponent } from './core/pages/error/error-page.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';

export enum AppRoutesEnum {
  // * Sections * //
  Home = '',
  Projects = 'projects',
  Game = 'game',

  // * Extra * //
  Error = 'error',
  NotFound = 'not-found',
}

// =========================================================== //
//   Use only to redirect top-level *App Sections*, when the   //
//     routing requires full page layout change.               //
// =========================================================== //

export const routes: Routes = [
  // --- Sections --- //

  {
    path: AppRoutesEnum.Projects,
    component: MainLayoutComponent,
    loadChildren: () => import('./sections/projects/projects.routes').then(m => m.sectionRoutes)
  },

  {
    path: AppRoutesEnum.Game,
    component: MainLayoutComponent,
    loadChildren: () => import('./sections/game/game.routes').then(m => m.sectionRoutes)
  },

  // --- Legacy URLs --- //

  { path: 'home', redirectTo: AppRoutesEnum.Home, pathMatch: 'full' },

  // --- Home (app root) --- //
  // Its routes have no wildcard, so unmatched paths fall through to the routes below.

  {
    path: AppRoutesEnum.Home,
    component: MainLayoutComponent,
    loadChildren: () => import('./sections/about-me/about-me.routes').then(m => m.sectionRoutes)
  },

  // --- Extra Routes --- //

  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      { path: AppRoutesEnum.Error, component: ErrorPageComponent },
      { path: AppRoutesEnum.NotFound, component: PageNotFoundComponent }
    ]
  },

  // --- Wildcard --- //

  { path: '**', redirectTo: AppRoutesEnum.NotFound },
];
