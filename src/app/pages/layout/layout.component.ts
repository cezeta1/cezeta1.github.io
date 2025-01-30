import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  TuiDataList,
  TuiDropdown,
  TuiFallbackSrcPipe,
  TuiTextfield,
  TuiTitle
} from '@taiga-ui/core';
import { TuiAvatar, TuiTabs } from '@taiga-ui/kit';
import { TuiHeader, TuiNavigation } from '@taiga-ui/layout';

import { FooterComponent } from '../../core/components/footer/footer.component';
import { DarkModeSwitchComponent } from '../../core/components/ui/dark-mode-switch/dark-mode-switch.component';
import { IconButtonComponent } from "../../core/components/ui/icon-button/icon-button.component";

import { environment as env } from '../../../environment/environment';
import { LanguageSelectorComponent } from "../../core/components/ui/language-selector/language-selector.component";

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
    IconButtonComponent,
    LanguageSelectorComponent
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
    let url = "";
    switch (social) {
      case 'email': url = `mailto:${env.links.email}`; break;
      case 'linkedin': url = env.links.linkedin; break;
      case 'github': url = env.links.github; break;
    }
    window.open(url, '_blank');
  }
}
