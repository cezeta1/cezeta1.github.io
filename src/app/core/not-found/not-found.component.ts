import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'cz-not-found',
  imports: [ 
    NzResultModule, 
    NzButtonModule 
  ],
  template: `
    <nz-result 
      class="flex flex-col items-center justify-center h-full"
      nzStatus="404" 
      nzTitle="404" 
      nzSubTitle="Oops! There is nothing here yet"
    >
      <div nz-result-extra>
        <button nz-button nzType="primary" (click)="goToHome()">Back Home</button>
      </div>
    </nz-result>
  `
})
export class NotFoundComponent {
  private router = inject(Router);

  protected goToHome = () => 
    this.router.navigate(['/']);
}
