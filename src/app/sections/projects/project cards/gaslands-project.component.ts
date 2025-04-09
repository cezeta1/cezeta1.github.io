import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'gaslands-project-card',
  imports: [
    CardModule,
    ButtonModule,
    MessageModule
  ],
  template:`    
    <p-card 
      styleClass="
        h-full max-w-[300px] 
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      "
    >
      <ng-template #header>
        <div 
          class="
            max-h-[10rem] min-h-[10rem]
            h-full w-full overflow-hidden  
            border-b border-toolbar-border-color
          "
        >
          <img 
            class="-mt-1 w-full !rounded-t-xl" 
            src="/assets/images/gaslands-car.png" 
            alt="Card"
          />
        </div>
      </ng-template>
      
      <ng-template #title> 
        Gaslands Dice Roller
      </ng-template>
      
      <ng-template #subtitle>
      <span class="text-muted text-sm">Boardgame companion</span>
      </ng-template>

      <p>
        Gaslands skid dice roller, for all your carnage needs!
      </p>
      
      <ng-template #footer>
      
        <div class="inline-flex mt-1 gap-2 w-full">
          <p-button 
            outlined
            class="grow"
            styleClass="w-full grow"
            icon="pi pi-github" 
            label="Github project" 
            severity="secondary"
            (onClick)="redirectToGithub()"
          />
          <p-button
            icon="pi pi-car" 
            label="Go!"
            (onClick)="redirectToLive()"
          />
        </div>

      </ng-template>
    </p-card>
  `
})
export class GaslandsProjectCardComponent {
  protected redirectToGithub = () => window.open('https://github.com/cezeta1/gaslands-app-ng', '_blank');
  protected redirectToLive = () => window.open('https://cezeta1.github.io/gaslands-app-ng', '_blank');
}
