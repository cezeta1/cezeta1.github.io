import { Component } from "@angular/core";
import { ContactFormComponent } from "./contact/contact-form.component";
import { IntroComponent } from "./intro/intro.component";
import { ResumeComponent } from "./resume/resume.component";

@Component({
  selector: 'about-me',
  imports: [
    // UnderConstructionComponent, 
    IntroComponent, 
    ResumeComponent,
    ContactFormComponent
  ],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {}
