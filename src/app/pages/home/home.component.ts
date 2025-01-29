import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'home',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div>
      <h1>Home</h1>
    </div>
  `
})
export class HomeComponent { }
