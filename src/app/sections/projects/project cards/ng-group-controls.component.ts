import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Button } from "primeng/button";
import { Card } from 'primeng/card';
import { Message } from 'primeng/message';
import { AppRoutesEnum } from "../../../app.routes";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'ng-group-controls-project-card',
  imports: [
    TranslatePipe,
    Card,
    Button, 
    Message
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
        <div class="max-h-[10rem] min-h-[10rem] h-full w-full background-pattern overflow-hidden border-b border-toolbar-border-color"></div>
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

      <p-message severity="secondary" styleClass="mt-4" size="small" icon="pi pi-thumbs-up">
        <span>
          {{ translateRoot+"message1.start" | translate }}
          <a (click)='redirectToHome()' class='underline'>
            {{ translateRoot+"message1.link" | translate }}
          </a>
          {{ translateRoot+"message1.end" | translate }}
        </span>
      </p-message>
      
      <p-message styleClass="mt-4" size="small" icon="pi pi-info-circle">
        {{ translateRoot+"message2" | translate }}
      </p-message>
      
      <ng-template #footer>
      
        <div class="flex flex-col mt-1 gap-2 w-full justify-center">
          <p-button
            outlined
            styleClass="w-full"
            icon="pi pi-github"
            [label]="translateRoot+'github-btn' | translate"
            severity="secondary"
            (onClick)="redirectToGithub()"
          />

          <div class="inline-flex w-full *:!w-full gap-2">
            <p-button
              outlined
              styleClass="w-full !text-red-400"
              icon="pi pi-box"
              label="npm"
              severity="secondary"
              (onClick)="redirectToNpm()"
            />
            <p-button
              disabled
              icon="pi pi-globe"
              [label]="translateRoot+'doc-btn' | translate"
              severity="secondary"
              (onClick)="redirectToLive()"
            />
          </div>
        </div>
      </ng-template>
    </p-card>
  `
})
export class NgGroupControlsProjectCardComponent {
  private _router = inject(Router);
  
  protected translateRoot = "projects.cards.ng-group-controls.";

  protected redirectToGithub = () => window.open('https://github.com/cezeta1/ng-group-controls', '_blank');
  protected redirectToNpm = () => window.open('https://www.npmjs.com/package/ng-group-controls', '_blank');
  protected redirectToLive = () => window.open('https://github.com/cezeta1/ng-group-controls', '_blank');
  protected redirectToHome = () => this._router.navigate([AppRoutesEnum.Home]);
}
