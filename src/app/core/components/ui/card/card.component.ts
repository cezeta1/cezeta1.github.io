import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TuiAppearance } from "@taiga-ui/core";
import { TuiTitle } from "@taiga-ui/core";
import { TuiCardLarge, TuiHeader } from "@taiga-ui/layout";

@Component({
  selector: 'cz-card',
  standalone: true,
  imports: [
    CommonModule,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    TuiAppearance,
  ],
  template: `
    <div
      tuiCardLarge
      tuiAppearance="floating"
    >
      <header tuiHeader class="border-b border-gray-200/25">
        <h2 tuiTitle>
          <ng-content select="[cz-card-header-title]"></ng-content>
        </h2>

        <div tuiAccessories>
          <ng-content select="[cz-card-header-right]"></ng-content>
        </div>
      </header>

      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent { }