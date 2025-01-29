import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full py-8 text-center">
      <div class="container mx-auto">
        <p class="italic text-sm mb-2">"Take all your dreams, make your memories"</p>
        <p class="text-xs opacity-75">Julián Czerweny - © {{ currentYear }} All rights reserved</p>
      </div>
    </div>
  `,
})
export class FooterComponent {
  protected currentYear = new Date().getFullYear();
}
