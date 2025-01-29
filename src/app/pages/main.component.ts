import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-main',
  imports: [
    ReactiveFormsModule, 
    LayoutComponent, 
    RouterOutlet
  ],
  template: `
    <app-layout [headerTitle]="headerTitle">
      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class MainComponent {

  public headerTitle = environment.pageTitle;
}