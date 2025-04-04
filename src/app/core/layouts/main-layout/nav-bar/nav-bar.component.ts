import { CommonModule } from "@angular/common";
import { Component, computed, inject, input, signal } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Avatar } from 'primeng/avatar';
import { TabsModule } from 'primeng/tabs';
import { Toolbar } from 'primeng/toolbar';
import { AppRoutesEnum } from "../../../../app.routes";
import { DarkModeSwitchComponent } from "../../../components/dark-mode-switch/dark-mode-switch.component";
import { LangSelectorComponent } from "../../../components/lang-selector/lang-selector.component";

export interface AppRouteTab {
  route: string, 
  label: string, 
  icon: string
}

@Component({
  selector: 'nav-bar',
  imports: [
    CommonModule,
    RouterModule,
    Toolbar,
    Avatar,
    TabsModule,
    DarkModeSwitchComponent,
    LangSelectorComponent
  ],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  protected router = inject(Router);
  
  protected avatarSrc = signal('https://avatars.githubusercontent.com/u/73889711');
  
  protected showTabs = computed(() => !!this.tabs().length);
  protected tabs = input<AppRouteTab[]>([
    { route: AppRoutesEnum.Home, label: 'Home', icon: 'pi-home' },
    { route: AppRoutesEnum.Projects, label: 'Projects',  icon: 'pi-star' },
    // { route: '/error', label: 'Error',  icon: 'pi-exclamation-triangle' }
  ]);
}