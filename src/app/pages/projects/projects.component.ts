import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'projects',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div>
      <h1>Projects</h1>
    </div>
  `
})
export class ProjectsComponent { }