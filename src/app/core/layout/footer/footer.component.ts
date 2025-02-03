import { Component } from "@angular/core";
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'cz-footer',
  imports: [ NzDividerModule ],
  template: `
    <nz-divider></nz-divider>
    <div class="w-full py-2 text-center">
      <div class="container mx-auto">
        <p class="italic text-sm mb-2">Take all your dreams, make your memories</p>
        <p class="text-xs opacity-75">Julián Czerweny - © {{ currentYear }} All rights reserved</p>
      </div>
    </div>
  `
})
export class CzFooterComponent {
  protected currentYear = new Date().getFullYear();
}