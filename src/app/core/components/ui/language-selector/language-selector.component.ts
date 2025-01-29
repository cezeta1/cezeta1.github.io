import { CommonModule } from "@angular/common";
import { Component, inject, Injector, input, signal } from "@angular/core";
import { TuiButton, TuiDataList, TuiDropdown } from "@taiga-ui/core";
import { AppLangsConfig, AppLangsEnum, CountrySelect } from "../../../services/language/langs.config";
import { LanguageService } from "../../../services/language/language.service";
import { cz_takeUntilDestroyed } from "../../../utils";

@Component({
  selector: 'cz-language-selector',
  standalone: true,
  imports: [
    CommonModule,
    TuiButton,
    TuiDataList,
    TuiDropdown
  ],
  templateUrl: './language-selector.component.html'
})
export class LanguageSelectorComponent {
  
  private _inj = inject(Injector);
  private _languageService = inject(LanguageService);

  public transparent = input<boolean>(false);

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