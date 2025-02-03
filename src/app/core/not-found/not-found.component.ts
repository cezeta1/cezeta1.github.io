import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'not-found',
  imports: [],
  template: `
    <div class="w-full h-full flex flex-col items-center justify-center">
      <!-- <tui-block-status size="m">
        <div>
          <h4>Oops! There is nothing here yet</h4>
        </div>
        
        <button
          appearance="primary"
          size="s"
          tuiButton
          type="button"
          (click)="goToHome()"
        >
          Go to Home
        </button>
      </tui-block-status> -->
    </div>
  `
})
export class NotFoundComponent {
  private router = inject(Router);

  protected goToHome() {
    this.router.navigate(['/']);
  }
}
