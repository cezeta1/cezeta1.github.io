import { Component, inject } from '@angular/core';
import { TuiThemeColorService } from '@taiga-ui/cdk/services';
import { TUI_DARK_MODE, TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'dark-mode-switch',
  imports: [ TuiButton ],
  template: `
    <button tuiIconButton 
      type="button"
      size="m"
      [iconStart]="isDarkMode() ? '@tui.moon': '@tui.sun'"
      tuiAppearance="secondary"
      class="!rounded-full"
      (click)="onModeToggle()"
    ></button>
  `,
})
export class DarkModeSwitchComponent {

  protected readonly isDarkMode = inject(TUI_DARK_MODE);
  protected readonly theme = inject(TuiThemeColorService);

  onModeToggle() {
    this.isDarkMode.set(!this.isDarkMode());
  }
}