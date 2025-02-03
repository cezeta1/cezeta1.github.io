import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'home',
  imports: [ TranslatePipe ],
  template: `
    <div class="flex flex-col">
      <h1>{{ 'home.title' | translate }}</h1>
    </div>
  `
})
export class HomeComponent { }
