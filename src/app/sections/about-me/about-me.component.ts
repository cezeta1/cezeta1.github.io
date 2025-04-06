import { Component } from "@angular/core";
import { UnderConstructionComponent } from "../../core/components/under-construction/under-construction.component";
import { IntroComponent } from "./intro/intro.component";
import { ResumeComponent } from "./resume/resume.component";
import { ContactFormComponent } from "./contact/contact-form.component";

@Component({
  selector: 'about-me',
  imports: [
    UnderConstructionComponent, 
    IntroComponent, 
    ResumeComponent,
    ContactFormComponent
  ],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {}
