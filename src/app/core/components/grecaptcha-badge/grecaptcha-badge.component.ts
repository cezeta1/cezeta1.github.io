// .grecaptcha-badge { 
//   visibility: hidden; 
//   }

import { Component } from "@angular/core";

@Component({
  selector: 'grecaptcha-badge',
  imports: [],
  template: `
    <span class="text-xs text-muted-color [&>_a]:text-primary-color">
      This site is protected by reCAPTCHA and the Google
      <a (click)="goToPrivacy()">
        Privacy Policy
      </a> 
      and
      <a (click)="goToTerms()">
        Terms of Service
      </a> 
      apply.
    </span>
  `,
  styleUrl: 'grecaptcha-badge.component.scss'
})
export class GRecaptchaBadgeComponent {
  protected goToPrivacy = () => window.open("https://policies.google.com/privacy", '_blank');
  protected goToTerms = () => window.open("https://policies.google.com/terms", '_blank');
}
