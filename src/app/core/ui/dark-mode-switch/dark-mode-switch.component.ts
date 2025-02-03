import { Component, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'dark-mode-switch',
  imports: [ NzButtonModule, NzIconModule ],
  template: `
    <button nz-button 
      nzType="text" 
      nzShape="circle" 
      [nzSize]="size()" 
      (click)="onModeToggle()"
    >
      <nz-icon [nzType]="isDarkMode() ? 'moon' : 'sun'" />
    </button>
  `,
})
export class DarkModeSwitchComponent {
  private readonly themeService = inject(ThemeService);
  
  protected size = signal<NzButtonSize>('large');
  protected isDarkMode = computed(() => this.themeService.isDarkMode());

  onModeToggle() {
    this.themeService.toggleTheme().then();
  }
}