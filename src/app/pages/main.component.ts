import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { environment } from '../../environment/environment';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-main',
  imports: [
    ReactiveFormsModule, 
    LayoutComponent
  ],
  template: `
    <app-layout [headerTitle]="headerTitle"></app-layout>
  `
})
export class MainComponent {
  public headerTitle = environment.pageTitle;
}