import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainComponent } from './pages/main.component';

const AppRoutesEnum = {
  NotFound: '404',
}

export const routes: Routes = [
  // --- Home route --- //
    
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    
  // --- Sections --- //

  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./pages/main.routes').then(m => m.routes)
  },

  { path: AppRoutesEnum.NotFound, component: NotFoundComponent },

  // --- Wildcard --- //

  { path: '**', redirectTo: AppRoutesEnum.NotFound },
];
