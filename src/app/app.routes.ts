import { Routes } from '@angular/router';
import { EmptyLayoutComponent } from './core/layouts/empty-layout/empty-layout.component';
import { ErrorPageComponent } from './core/pages/error/error-page.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

export enum AppRoutesEnum {
  // * Sections * //
  Example = 'example',

  // * Extra * //
  Error = 'error',
  NotFound = 'not-found',
}

// =========================================================== //
//   Use only to redirect top-level *App Sections*, when the   //
//     routing requires full page layout change.               //
// =========================================================== //

export const routes: Routes = [
  // --- Home route --- //
  
  { path: '', redirectTo: AppRoutesEnum.Example, pathMatch: 'full' },
  
  // --- Sections --- //

  {
    path: AppRoutesEnum.Example,
    component: MainLayoutComponent,
    loadChildren: () => import('./sections/example/example.routes').then(m => m.sectionRoutes)
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