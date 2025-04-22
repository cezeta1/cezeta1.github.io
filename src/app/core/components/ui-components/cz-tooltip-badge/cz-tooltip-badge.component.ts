import { Component, input, viewChild } from '@angular/core';
import { Badge } from 'primeng/badge';
import { Tooltip } from 'primeng/tooltip';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'cz-tooltip-badge',
  imports: [ Badge, Tooltip ],
  templateUrl: './cz-tooltip-badge.component.html'
})
export class CZTooltipBadgeComponent {

  private _tooltipRef = viewChild(Tooltip);
  private _tooltipSub!: Subscription | null;

  public text = input<string>("Tooltip");
  
  protected onClick() {

    const ttRef = this._tooltipRef();
    if (!ttRef)
      return;

    if (!ttRef.active)
      ttRef.activate();
    
    if (!!this._tooltipSub)
      this._cleanSub();
    
    this._tooltipSub = interval(3000)
      .subscribe(_ => {
        ttRef.deactivate();
        this._cleanSub();
      });
  }

  private _cleanSub() {
    this._tooltipSub?.unsubscribe();
    this._tooltipSub = null;
  }
}