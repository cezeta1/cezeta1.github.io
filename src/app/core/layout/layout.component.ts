import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { CzFooterComponent } from './footer/footer.component';
import { CzDarkModeSwitchComponent } from "../ui/dark-mode-switch/dark-mode-switch.component";
import { CzLanguageSelectorComponent } from "../ui/language-selector/language-selector.component";

@Component({
  selector: 'cz-layout',
  imports: [
    CommonModule,
    
    NzButtonModule,
    NzLayoutModule,
    NzAvatarModule,
    NzPageHeaderModule,
    NzDividerModule,

    CzFooterComponent,
    CzDarkModeSwitchComponent,
    CzLanguageSelectorComponent
],
  templateUrl: './layout.component.html'
})
export class CzLayoutComponent { 

  protected tabIdx = signal(0);
  protected avatarSource = signal('https://avatars.githubusercontent.com/u/73889711');

  protected tabs = signal([
    { title: 'Home', icon: '@tui.home', route: 'home' },
    { title: 'About me', icon: '@tui.info', route: 'about-me' },
    { title: 'Projects', icon: '@tui.star', route: 'projects' },
    { title: 'Contact', icon: '@tui.mail', route: 'contact' },
  ]);
}