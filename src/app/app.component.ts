import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  template: `<router-outlet class="h-full"></router-outlet>`
})
export class AppComponent { }
