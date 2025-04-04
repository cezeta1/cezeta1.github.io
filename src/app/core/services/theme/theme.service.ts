import { computed, inject, Injectable, signal } from "@angular/core";
import { LocalStorageService } from "../storage/local-storage.service";

enum ThemeType {
  default = 'default',
  dark = 'dark',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  
  private _localStorage = inject(LocalStorageService);

  public currentTheme = signal(this._localStorage.load<string>('theme') || ThemeType.default);
  public isDarkMode = computed(() => this.currentTheme() === ThemeType.dark);

  public loadTheme(firstLoad = true): Promise<Event> {
    const theme = this.currentTheme();
    
    if (firstLoad)
      document.documentElement.classList.add(theme);

    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (e) => {
          if (!firstLoad) 
            document.documentElement.classList.add(theme);

          this.removeUnusedTheme(this.reverseTheme());
          resolve(e);
        },
        (e) => reject(e)
      );
    });
  }

  public toggleTheme(): Promise<Event> {
    this.currentTheme.set(this.reverseTheme());
    this._localStorage.save('theme', this.currentTheme());
    return this.loadTheme(false);
  }

  // --- Private methods --- //

  private removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle)
      document.head.removeChild(removedThemeStyle);
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  private reverseTheme = (): ThemeType => 
    this.currentTheme() === ThemeType.dark 
      ? ThemeType.default 
      : ThemeType.dark;
}
