import { Component } from "@angular/core";

@Component({
  selector: 'vertical-bar',
  template: `<span class="text-lg opacity-50 title-color"> | </span>`,
  styles: `
    .title-color {
      color: var(--tui-text-action);
    }
  `
})
export class VerticalBarComponent { }