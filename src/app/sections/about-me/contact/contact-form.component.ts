import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslatePipe } from "@ngx-translate/core";
import { Button } from "primeng/button";
import { CZTextAreaComponent } from "../../../core/components/ui-components/cz-text-area/cz-text-area.component";
import { CZTextInputComponent } from "../../../core/components/ui-components/cz-text-input/cz-text-input.component";

@Component({
  selector: 'contact-form',
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    Button,
    CommonModule,
    CZTextInputComponent,
    CZTextAreaComponent
],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  private _fb = inject(FormBuilder);

  protected contactForm = this._fb.group({
    email: [null, [Validators.required, Validators.email]],
    subject: [null, [Validators.required]],
    body: [null, [Validators.required]],
  });

  protected onSubmit(): void {
    if (!this.contactForm.valid)
      return;

    // console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}