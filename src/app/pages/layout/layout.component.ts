import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DarkModeSwitchComponent } from '../../core/ui/dark-mode-switch/dark-mode-switch.component';

import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  TuiAppearance,
  TuiDataList,
  TuiDropdown,
  TuiFallbackSrcPipe,
  TuiTextfield,
  TuiTitle
} from '@taiga-ui/core';
import { TuiAvatar, TuiTabs } from '@taiga-ui/kit';
import { TuiHeader, TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule, 
    RouterLinkActive, 
    RouterLink, 
    DarkModeSwitchComponent,
    TuiFallbackSrcPipe,
    TuiAvatar,
    TuiHeader,
    FormsModule,
    TuiAppearance,
    TuiAvatar,
    TuiHeader,
    TuiTitle,
    TuiNavigation,
    TuiTabs,
    TuiTextfield,
    TuiDataList,
    TuiDropdown,
    TuiNavigation,
    TuiTabs,
  ],
  templateUrl: './layout.component.html'
})
export class LayoutComponent { 
  protected tabIdx = signal(0);
  protected avatarSource = signal('https://avatars.githubusercontent.com/u/73889711');

  protected tabs = signal([
    { title: 'Home', icon: '@tui.home', route: 'home' },
    { title: 'About me', icon: '@tui.info', route: 'about-me' },
    { title: 'Projects', icon: '@tui.star', route: 'projects' },
    { title: 'Contact', icon: '@tui.mail', route: 'contact' },
  ]);
}