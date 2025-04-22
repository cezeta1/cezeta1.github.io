import { Component } from "@angular/core";
import { Card } from 'primeng/card';
import { Button } from "primeng/button";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'fx-exchange-project-card',
  imports: [Card, Button, TranslatePipe],
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
            src="/assets/images/fx.jpeg" 
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
        <p-button
          outlined
          styleClass="w-full"
          icon="pi pi-github"
          [label]="translateRoot+'github-btn' | translate"
          severity="secondary"
          (onClick)="redirectToGithub()"
        />
      </ng-template>
    </p-card>
  `
})
export class FXExchangeProjectCardComponent {
  protected translateRoot = "projects.cards.fx-exchange.";
  protected redirectToGithub = () => window.open('https://github.com/cezeta1/fx-exchange-demo', '_blank');
}
