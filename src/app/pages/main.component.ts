import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CzLayoutComponent } from '../core/layout/cz-layout.component';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    CzLayoutComponent,
  ],
  template: `
    <cz-layout>
      <router-outlet></router-outlet>
    </cz-layout>
  `
})
export class MainComponent { }