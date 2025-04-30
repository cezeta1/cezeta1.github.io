import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { Button } from "primeng/button";
import { Card } from 'primeng/card';

@Component({
  selector: 'gaslands-project-card',
  imports: [TranslatePipe, Card, Button],
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
            class="object-cover w-full h-full !rounded-t-xl" 
            src="/assets/images/gaslands-car.png" 
            alt="Card"
          />
        </div>
      </ng-template>
      
      <ng-template #title>
        {{ translateRoot+"title" | translate }} 
      </ng-template>
      
      <ng-template #subtitle>
        <span class="text-muted text-sm">
          {{ translateRoot+"subtitle" | translate }}
        </span>
      </ng-template>

      <p>
        {{ translateRoot+"content" | translate }}
      </p>
      
      <ng-template #footer>
      
        <div class="inline-flex mt-1 gap-2 w-full">
          <p-button 
            outlined
            class="grow"
            styleClass="w-full grow"
            icon="pi pi-github"
            [label]="translateRoot+'github-btn' | translate"
            severity="secondary"
            (onClick)="redirectToGithub()"
          />
          <p-button
            icon="pi pi-car" 
            [label]="translateRoot+'go-btn' | translate"
            (onClick)="redirectToLive()"
          />
        </div>

      </ng-template>
    </p-card>
  `
})
export class GaslandsProjectCardComponent {
  protected translateRoot = "projects.cards.gaslands.";
  protected redirectToGithub = () => window.open('https://github.com/cezeta1/gaslands-app-ng', '_blank');
  protected redirectToLive = () => window.open('https://cezeta1.github.io/gaslands-app-ng', '_blank');
}
