import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'ng-group-controls-project-card',
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
        <div class="max-h-[10rem] min-h-[10rem] h-full w-full background-pattern overflow-hidden border-b border-toolbar-border-color"></div>
      </ng-template>
      
      <ng-template #title> 
        Ng Group Controls
      </ng-template>
      
      <ng-template #subtitle>
        <span class="text-muted text-sm">npm package</span>
      </ng-template>

      <p>
        A lightweight library providing an Angular Form Control extension to simplify the creation of composed custom reactive formControls.
      </p>
      
      <p-message styleClass="mt-4" size="small" icon="pi pi-info-circle">
        v1.0 coming soon!
      </p-message>
      
      <ng-template #footer>
      
        <div class="flex flex-col mt-1 gap-2 w-full justify-center">
          <p-button
            disabled
            styleClass="w-full"
            icon="pi pi-github"
            label="Github project"
            severity="secondary"
            (onClick)="redirectToGithub()"
          />

          <div class="inline-flex w-full *:!w-full gap-2">
            <p-button
              disabled
              styleClass="w-full"
              icon="pi pi-box"
              label="npm"
              severity="secondary"
              (onClick)="redirectToNpm()"
            />
            <p-button
              disabled
              icon="pi pi-globe"
              label="Documentation"
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
  protected redirectToGithub = () => window.open('https://github.com/cezeta1/ng-group-controls', '_blank');
  protected redirectToNpm = () => window.open('https://github.com/cezeta1/ng-group-controls', '_blank');
  protected redirectToLive = () => window.open('https://github.com/cezeta1/ng-group-controls', '_blank');
}
