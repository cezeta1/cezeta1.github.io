import { AfterViewInit, Component, inject } from "@angular/core";
import { ContactFormComponent } from "./contact/contact-form.component";
import { IntroComponent } from "./intro/intro.component";
import { ResumeComponent } from "./resume/resume.component";
import { Router } from "@angular/router";
import { Button } from "primeng/button";
import { animate, engine } from 'animejs';

@Component({
  selector: 'about-me',
  imports: [
    // UnderConstructionComponent, 
    IntroComponent, 
    ResumeComponent,
    ContactFormComponent,
    Button
  ],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements AfterViewInit {
  private _router = inject(Router);
  
  protected onGameRedirect() {
    this._router.navigate(['/game']);
  }

  ngAfterViewInit() {

    animate('#surprise-btn', {
      opacity: [
        { from: 0, to: 1, ease: 'easeIn', duration: 500 },
        { from: 1, to: 1, duration: 2000 },
        { from: 1, to: 0, ease: 'easeIn', duration: 500 },
      ],
      delay: 2000,
      loop: true,
      loopDelay: 5000,
      alternate: true,
    });    
  }
}
