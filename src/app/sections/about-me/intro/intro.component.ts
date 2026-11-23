import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { Divider } from "primeng/divider";

@Component({
  selector: 'intro',
  imports: [
    Divider,
    TranslatePipe
  ],
  templateUrl: './intro.component.html',
})
export class IntroComponent { }
