import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'home',
  imports: [ TranslatePipe ],
  templateUrl: './home.component.html'
})
export class HomeComponent { }
