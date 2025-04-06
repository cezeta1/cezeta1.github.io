import { Component, inject, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ThemeService } from "../../services/themes/theme.service";
import { CommonModule } from "@angular/common";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { ScrollTop } from "primeng/scrolltop";

@Component({
  selector: 'main-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    ScrollTop
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  
  protected themeService = inject(ThemeService);

  protected avatarSrc = signal('https://avatars.githubusercontent.com/u/73889711');
}
