import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { Divider } from "primeng/divider";
import { Image } from "primeng/image";

@Component({
  selector: 'intro',
  imports: [  
    Image,
    Divider,
    TranslatePipe
  ],
  templateUrl: './intro.component.html',
})
export class IntroComponent { }