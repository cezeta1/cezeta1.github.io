import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'contact',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div>
      <h1>Contact</h1>
    </div>
  `
})
export class ContactComponent { }
