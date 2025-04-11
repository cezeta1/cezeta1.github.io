import { Component } from "@angular/core";
import { Button } from "primeng/button";
import { Card } from 'primeng/card';
import { Message } from 'primeng/message';

@Component({
  selector: 'fx-exchange-project-card',
  imports: [
    Card,
    Button
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
            src="/assets/images/fx.jpeg" 
            alt="Card"
          />
        </div>
      </ng-template>
      
      <ng-template #title> 
        Fx Exchange Platform
      </ng-template>
      
      <ng-template #subtitle>
        <span class="text-muted text-sm">Tech demo</span>
      </ng-template>

      <p>
        Tech demo built for a code challenge demo. Features a foreign exchange (FX) platform where users can create contracts selecting which currency they want to convert from and to.
      </p>

      <ng-template #footer>
        <p-button
          outlined
          styleClass="w-full"
          icon="pi pi-github"
          label="Github project"
          severity="secondary"
          (onClick)="redirectToGithub()"
        />
      </ng-template>
    </p-card>
  `
})
export class FXExchangeProjectCardComponent {
  protected redirectToGithub = () => window.open('https://github.com/cezeta1/fx-exchange-demo', '_blank');
}
