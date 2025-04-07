import { Component } from "@angular/core";
import { ProjectCardComponent } from "./project-card.component";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'projects',
  imports: [
    TranslatePipe,
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {}
