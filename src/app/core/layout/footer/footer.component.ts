import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { environment as env } from '../../../../environment/environment';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";

@Component({
  selector: 'cz-footer',
  imports: [ 
    CommonModule,
    NzDividerModule, 
    NzButtonModule, 
    NzIconModule
  ],
  template: `
    
    <nz-divider class="pt-0 mt-0"></nz-divider>
    
    <div class="flex flex-col w-full py-2 text-center *:w-full">
      <ng-container *ngTemplateOutlet="socials"></ng-container>
      <p class="italic text-sm mb-2">Take all your dreams, make your memories</p>
      <p class="text-xs opacity-75">Julián Czerweny - © {{ currentYear }} All rights reserved</p>
    </div>

    <ng-template #socials>
      <div class="inline-flex justify-center items-center gap-2 w-full mb-2">
        <ng-container *ngTemplateOutlet="socialBtn; context: { $implicit: 'email', icon: 'mail' }"></ng-container> 
        <nz-divider nzType="vertical"></nz-divider>
        <ng-container *ngTemplateOutlet="socialBtn; context: { $implicit: 'linkedin', icon: 'linkedin' }"></ng-container>
        <nz-divider nzType="vertical"></nz-divider>
        <ng-container *ngTemplateOutlet="socialBtn; context: { $implicit: 'github', icon: 'github' }"></ng-container>
      </div>
    </ng-template>

    <ng-template #socialBtn let-social let-icon="icon">
      <button nz-button nzType="text" nzShape="circle" nzSize="small" (click)="onSocialsClick(social)">
        <nz-icon [nzType]="icon" />
      </button>
    </ng-template>
  `
})
export class CzFooterComponent {

  protected currentYear = new Date().getFullYear();
  
  protected onSocialsClick(social: string) {
    let url = "";
    switch (social) {
      case 'email': url = `mailto:${env.links.email}`; break;
      case 'linkedin': url = env.links.linkedin; break;
      case 'github': url = env.links.github; break;
    }
    window.open(url, '_blank');
  }
}