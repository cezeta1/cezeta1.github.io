import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { environment } from '../../environment/environment';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-main',
  imports: [
    ReactiveFormsModule, 
    LayoutComponent, 
    RouterOutlet
  ],
  template: `
    <app-layout [headerTitle]="headerTitle" class="flex flex-col h-full w-full">
      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class MainComponent {

  public headerTitle = environment.pageTitle;
}