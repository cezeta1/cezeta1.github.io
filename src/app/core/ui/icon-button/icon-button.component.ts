import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";
import { TuiButton } from "@taiga-ui/core";

@Component({
  selector: 'icon-button',
  imports: [
    CommonModule, 
    TuiButton
  ],
  template: `
    <button tuiIconButton 
      class="!rounded-full"
      type="button"
      [size]="size()"
      [iconStart]="icon()"
      [appearance]="appearance()"
      (click)="onClick.emit()"
    ></button>
  `
})
export class IconButtonComponent {
  public size = input<"s" | "m" | "l" | "xl" | "xs">('m');
  public icon = input<string>('@icon.linkedin');
  public appearance = input<string>('primary');
  
  public onClick = output<void>();
}