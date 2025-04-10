import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslatePipe } from "@ngx-translate/core";
import { Button } from "primeng/button";
import { CZTextAreaComponent } from "../../../core/components/ui-components/cz-text-area/cz-text-area.component";
import { CZTextInputComponent } from "../../../core/components/ui-components/cz-text-input/cz-text-input.component";
import { AlertsService } from "../../../core/services/alerts/alerts.service";
import { EmailSenderService } from "../../../core/services/email-sender/email-sender.service";
import { environment as env } from "../../../../environments/environment";

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

  private _alertsService = inject(AlertsService);
  private _emailSenderService = inject(EmailSenderService);
  private _fb = inject(FormBuilder);

  protected reCaptchaKey = env.reCaptchaKey;

  protected contactForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  protected onSubmit(e: any): void {
    if (!this.contactForm.valid)
      return;
    
    this._emailSenderService
      .sendEmail(this.contactForm.value)
      .subscribe({
        next: (ret: any) => {
          if (ret['ok'])
            this._alertsService.showSuccess("Email sent! 😀");
          else
            this._alertsService.showError("There has been an error sending email 😥");
        },
        error: (_ => {
          this._alertsService.showError("There has been an error sending email 😥");
        })
      });
    
      debugger;

      this.contactForm.reset();
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
      
      Object.values(this.contactForm.controls)
        .forEach(f => { 
          f.reset();
          f.markAsPristine();
          f.markAsUntouched();
        });
    
  }
  
}