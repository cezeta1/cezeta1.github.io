import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'about-me',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div>
      <h1>About me</h1>
    </div>
  `
})
export class AboutMeComponent { }
