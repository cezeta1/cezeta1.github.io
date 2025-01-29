import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TuiAvatar, TuiTabs } from '@taiga-ui/kit';
import { TuiHeader, TuiNavigation } from '@taiga-ui/layout';
import {
  TuiDataList,
  TuiDropdown,
  TuiFallbackSrcPipe,
  TuiTextfield,
  TuiTitle
} from '@taiga-ui/core';

import { DarkModeSwitchComponent } from '../../core/ui/dark-mode-switch/dark-mode-switch.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { IconButtonComponent } from "../../core/ui/icon-button/icon-button.component";

import { environment as env } from '../../../environment/environment';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    TuiFallbackSrcPipe,
    
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

    DarkModeSwitchComponent,
    FooterComponent,
    IconButtonComponent
],
  templateUrl: './layout.component.html'
})
export class LayoutComponent { 
  public headerTitle = input<string>('Cezeta');
  
  protected tabIdx = signal(0);
  protected avatarSource = signal('https://avatars.githubusercontent.com/u/73889711');

  protected tabs = signal([
    { title: 'Home', icon: '@tui.home', route: 'home' },
    { title: 'About me', icon: '@tui.info', route: 'about-me' },
    { title: 'Projects', icon: '@tui.star', route: 'projects' },
    { title: 'Contact', icon: '@tui.mail', route: 'contact' },
  ]);

  protected onSocialsClick(social: string) {
    const url = social === 'linkedin' 
      ? env.links.linkedin
      : env.links.github;
    window.open(url, '_blank');
  }
}
