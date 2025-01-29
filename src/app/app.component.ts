import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TUI_DARK_MODE, TuiRoot } from "@taiga-ui/core";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  templateUrl: './app.component.html'
})
export class AppComponent { 
  readonly isDarkMode = inject(TUI_DARK_MODE);
}
