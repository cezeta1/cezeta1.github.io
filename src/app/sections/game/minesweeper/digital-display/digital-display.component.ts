import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: 'digital-display',
  imports: [ CommonModule ],
  template: `
    <div class="inline-flex w-full justify-between">
      <span> {{ label() }}: </span>

      <span class="lcd text-2xl">
        {{ value() }}
      </span>
    </div>
  `
})
export class CDigitalDisplayComponent {
  public label = input<string>();
  public value = input<number|string>();
}
