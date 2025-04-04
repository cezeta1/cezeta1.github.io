import { Component } from "@angular/core";
import { ProjectCardComponent } from "./project-card.component";

@Component({
  selector: 'projects',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {}
