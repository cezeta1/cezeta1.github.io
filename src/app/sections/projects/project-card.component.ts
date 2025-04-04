import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'project-card',
  imports: [
    CardModule,
    ButtonModule
  ],
  template:`
    <p-card styleClass="max-w-[300px] border border-toolbar-border-color">
      <ng-template #header>
        <img alt="Card" class="w-full !rounded-t-xl" src="/assets/images/gaslands-car.png" />
      </ng-template>
      
      <ng-template #title> 
        Gaslands Dice Roller 
      </ng-template>
      
      <ng-template #subtitle>

      </ng-template>

      <p>
        Gaslands skid dice roller, for all your carnage needs!
      </p>
      
      <ng-template #footer>
      
        <div class="flex mt-1 gap-2 w-full justify-center">
          <p-button 
            outlined
            styleClass="w-full"
            icon="pi pi-github" 
            label="Github project" 
            severity="secondary"
            (onClick)="redirectToGithub()"
          />
          <p-button 
            styleClass="w-full" 
            icon="pi pi-car" 
            label="Go!"
            (onClick)="redirectToProject()"
          />
        </div>
      </ng-template>
    </p-card>
  `
})
export class ProjectCardComponent {
  protected redirectToProject = () => window.open('https://cezeta1.github.io/gaslands-app-ng', '_blank');
  protected redirectToGithub = () => window.open('https://github.com/cezeta1/gaslands-app-ng', '_blank');
}
