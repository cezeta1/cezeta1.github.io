import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'projects',
  imports: [ TranslatePipe ],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent { }
