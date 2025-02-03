import { Component, inject, Injector, input, signal } from "@angular/core";
import { LanguageService } from "../../services/language/language.service";
import { AppLangsConfig, AppLangsEnum, CountrySelect } from "../../services/language/langs.config";
import { cz_takeUntilDestroyed } from "../../services/utils";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'cz-language-selector',
  imports: [ 
    NzDropDownModule, 
    NzIconModule, 
    TranslatePipe 
  ],
  template: `
    <a nz-dropdown 
      [nzDropdownMenu]="menu"
      nzPlacement="bottomRight"
    >
      <span class="text-2xl align-middle">{{ selectedOption?.flag }}</span>
    </a>

    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu nzSelectable>
        @for (opt of options; track opt.flag; let i = $index) {
          <li nz-menu-item (click)="onLangChange(opt)">
            <span class="!pr-4">{{ opt.flag }}</span> {{ opt.name }}
          </li>
        }
      </ul>
    </nz-dropdown-menu>
  `
})
export class CzLanguageSelectorComponent {
  
  private _inj = inject(Injector);
  private _languageService = inject(LanguageService);

  public transparent = input<boolean>(false);

  protected translateRoot = 'ui-components.language-selector.options.';

  protected open = signal<boolean>(false);
  protected selectedLang?: AppLangsEnum;

  protected options: CountrySelect[] = [];
  protected selectedOption: CountrySelect | undefined;

  ngOnInit(): void {
    this.selectedLang = this._languageService.currentLang;
    
    this._updateOptions();
    this.selectedOption = this.options
      .find(opt => opt.value === this.selectedLang);

    this._languageService.onLangChange
      .pipe(cz_takeUntilDestroyed(this._inj))
      .subscribe(_ => this._updateOptions());
  } 

  protected onLangChange = (lang: CountrySelect) => {
    this.selectedOption = lang;
    this._languageService.switchLanguage(lang.value as AppLangsEnum);
  }

  // --- Private Methods --- //

  private _updateOptions() {
    this.options = Object.keys(AppLangsConfig)
      .map((key: string) => ({
        name: this._getTranslatedCountryName(key as AppLangsEnum),
        value: key as AppLangsEnum,
        flag: this._getCountryFlag(key)
      } as CountrySelect));
  }

  private _getCountryFlag = (key: string) => 
    AppLangsConfig[key as AppLangsEnum]?.flagEmoji ?? "";

  private _getTranslatedCountryName = (lang: AppLangsEnum) => 
    this._languageService.translate("i18n")[lang] 
      ?? Object.keys(AppLangsEnum).find(key => (AppLangsEnum as any)[key] === lang);
}