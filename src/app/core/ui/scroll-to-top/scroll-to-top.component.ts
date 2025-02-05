import { Component } from "@angular/core";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzBackTopModule } from "ng-zorro-antd/back-top";
import { NzFloatButtonModule } from "ng-zorro-antd/float-button";

@Component({
  selector: 'cz-scroll-to-top',
  imports: [
    NzIconModule,
    NzBackTopModule,
    NzFloatButtonModule
  ],
  template: `
    <nz-back-top [nzTemplate]="tpl">
      <ng-template #tpl>
        <nz-float-button [nzIcon]="icon" class="">
          <ng-template #icon>
            <nz-icon 
              nzType="up-circle" 
              nzTheme="outline" 
              class="!text-2xl" 
              style="
                position: absolute;
                align-self: anchor-center;
                justify-self: anchor-center;
              "
            />
          </ng-template>      
        </nz-float-button>
      </ng-template>
    </nz-back-top>  
  `
})
export class CzScrollToTopComponent { }