import { Component, input } from "@angular/core";
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'experience-card',
  imports: [ NzCardModule ],
  template: `
    <nz-card
      [nzTitle]="title()" 
      [nzExtra]="extraTemplate"
    >
      <ng-content></ng-content>


    </nz-card>

    <ng-template #extraTemplate>
      <ng-content select="[cz-card-header-right]"></ng-content>
    </ng-template>
  `
})
export class ExperienceCardComponent {
  public title = input<string>("");  
}
