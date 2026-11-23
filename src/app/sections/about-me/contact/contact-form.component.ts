import { CommonModule } from "@angular/common";
import { Component, Inject, inject, Injector, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { Button } from "primeng/button";
import { CZTextAreaComponent } from "../../../core/components/ui-components/cz-text-area/cz-text-area.component";
import { CZTextInputComponent } from "../../../core/components/ui-components/cz-text-input/cz-text-input.component";
import { AlertsService } from "../../../core/services/alerts/alerts.service";
import { EmailSenderService } from "../../../core/services/email-sender/email-sender.service";
import { environment as env } from "../../../../environments/environment";
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, ReCaptchaV3Service } from "ng-recaptcha-2";
import { cz_takeUntilDestroyed } from "../../../core/utils";
import { CZUIBlockerComponent } from "../../../core/components/ui-components/cz-ui-blocker/cz-ui-blocker.component";
import { BlockableDivComponent } from "../../../core/components/ui-components/blockable-div/blockable-div.component";
import { GRecaptchaBadgeComponent } from "../../../core/components/grecaptcha-badge/grecaptcha-badge.component";

@Component({
  selector: 'contact-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    TranslatePipe,
    Button,
    CZTextInputComponent,
    CZTextAreaComponent,
    CZUIBlockerComponent,
    BlockableDivComponent,
    GRecaptchaBadgeComponent
  ],
  providers: [
    ReCaptchaV3Service,
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: env.reCaptchaKey }
  ],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {

  private _inj = inject(Injector);
  private _alertsService = inject(AlertsService);
  private _emailSenderService = inject(EmailSenderService);
  private _reCaptchaV3Service = inject(ReCaptchaV3Service);
  private _fb = inject(FormBuilder);
  private _translate = inject(TranslateService);
  
  protected isLoading = signal(false);
  protected contactForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.maxLength(250)]],
  });

  protected onSubmit(): void {
    if (!this.contactForm.valid)
      return;
    
    this.isLoading.set(true);

    this._reCaptchaV3Service
      .execute('contactFormSendEmail')
      .pipe(cz_takeUntilDestroyed(this._inj))
      .subscribe({
        next: (token) => {
          if (!token) {
            this._onSendError();
            return;
          }

          let formSpreePayload = {
            ...this.contactForm.value,
            'g-recaptcha-response': token
          };

          this._sendEmail(formSpreePayload);
        },
        error: () => this._onSendError()
      });
  }

  private _sendEmail(formSpreePayload: any) {
    this._emailSenderService
      .sendEmail(formSpreePayload)
      .subscribe({
        next: (ret: any) => {
          if (!ret?.['ok']) {
            this._onSendError();
            return;
          }

          this._alertsService.showSuccess(this._translate.instant('home.contact.send-success'));
          this.isLoading.set(false);
          this.contactForm.reset();
        },
        error: () => this._onSendError()
      });
  }

  // Keeps the form content so the user can retry
  private _onSendError() {
    this._alertsService.showError(this._translate.instant('home.contact.send-error'));
    this.isLoading.set(false);
  }
}