import { Routes } from '@angular/router';
import { AppRoutesEnum } from '../../app.routes';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';

export enum GameRoutesEnum {
  Minesweeper = ''
}

export const sectionRoutes: Routes = [

  // --- Content --- //

  { path: GameRoutesEnum.Minesweeper, component: MinesweeperComponent, pathMatch: 'full' },

  // --- Wildcard --- //

  { path: '**', redirectTo: `/${AppRoutesEnum.NotFound}` }
]
