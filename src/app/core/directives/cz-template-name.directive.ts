import { Directive, inject, input, TemplateRef } from '@angular/core';
import { v4 as uuidv4 } from "uuid";

@Directive({ selector: 'ng-template[name]' })
export class NgTemplateNameDirective {
  public template = inject(TemplateRef<any>);
  public nameInput = input<string>(uuidv4(), { alias: 'name' });
  public get name() { return this.nameInput() };
}