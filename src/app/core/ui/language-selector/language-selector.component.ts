import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { languages } from "./languages";
import { TuiDataList } from "@taiga-ui/core";
import { TuiButton, TuiDropdown } from "@taiga-ui/core";

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
  protected readonly items = languages;
  protected open = signal(false);

  protected selectedLang = computed<any>(() => 
    this.items.find(item => item.code === 'en')
  );


  protected onClick(): void {
    this.open.set(false);
  }
}