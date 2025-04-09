import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { FXExchangeProjectCardComponent } from "./project cards/fx-exchange.component";
import { GaslandsProjectCardComponent } from "./project cards/gaslands-project.component";
import { NgGroupControlsProjectCardComponent } from "./project cards/ng-group-controls.component";

@Component({
  selector: 'projects',
  imports: [
    TranslatePipe,
    NgGroupControlsProjectCardComponent,
    GaslandsProjectCardComponent,
    FXExchangeProjectCardComponent
],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {}
