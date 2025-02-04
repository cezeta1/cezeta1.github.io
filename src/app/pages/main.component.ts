import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CzLayoutComponent } from '../core/layout/layout.component';
import { LanguageService } from '../core/services/language/language.service';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    NzTabsModule,
    NzIconModule, 
    CzLayoutComponent
  ],
  template: `
    <cz-layout class="h-full">
      <nz-tabset nzCentered [nzSelectedIndex]="selectedIndex">
        @for (tab of tabs; track tab) {
          <nz-tab>
            <a *nzTabLink 
              nz-tab-link 
              [routerLink]="[tab.route]"
            >
              <nz-icon [nzType]="tab.icon" />
              {{ tab.name }}
            </a>
          </nz-tab>
        }
      </nz-tabset>
      <router-outlet></router-outlet>
    </cz-layout>
  `
})
export class MainComponent {
  private _router = inject(Router);
  private _languageService = inject(LanguageService);

  protected selectedIndex = 0;

  protected tabs = [
    { name: 'Home', icon: 'home', route: '/home' },
    { name: 'Projects', icon: 'star', route: '/projects' },
  ];

  constructor() {
    this._languageService.initializeAppLanguage();
    this._router.events.subscribe(() => this._updateIndex());
  }

  private _updateIndex() {
    this.selectedIndex = this.tabs.findIndex(tab => this._router.url.includes(tab.route));
  }
}