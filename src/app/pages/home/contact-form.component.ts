import { Component, inject } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzIconModule } from "ng-zorro-antd/icon";
import { CommonModule } from "@angular/common";
import { environment as env } from "../../../environment/environment";

@Component({
  selector: 'contact-form',
  imports: [ 
    CommonModule,
    ReactiveFormsModule, 
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule
  ],
  template: `
    <nz-card>
      <ng-container *ngTemplateOutlet="form"></ng-container>
    </nz-card>
    
    <ng-template #form>

      <form nzForm [formGroup]="contactForm" class="flex flex-col gap-4">
        <nz-form-item>
          <nz-form-control>
            <nz-input-group nzPrefixIcon="user">
              <input nz-input 
                type="text" 
                formControlName="name" 
                placeholder="Name" 
              />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>
  
        <nz-form-item>
          <nz-form-control>
            <nz-input-group nzPrefixIcon="user">
              <input nz-input 
                type="text" 
                formControlName="subject" 
                placeholder="Subject" 
              />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>
  
        <nz-form-item>
          <nz-form-control>
            
            <nz-textarea-count [nzMaxCharacterCount]="100"> 
              <textarea nz-input 
                formControlName="body"
                placeholder="Body" 
                rows="4"
              ></textarea>
            </nz-textarea-count>
            
          </nz-form-control>
        </nz-form-item>
      </form>

      <div class="flex justify-end">
        <button nz-button
          class="self-end"
          nzType="primary"
          (click)="sendEmail()"
          [disabled]="!contactForm.valid"
        >
          Send
          <nz-icon nzType="send" nzTheme="outline"/>
        </button>
      </div>
    </ng-template>
  `
})
export class ContactFormComponent {
  
  private _fb = inject(FormBuilder);

  protected contactForm = this._fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    subject: ['', [ Validators.required, Validators.minLength(3) ]],
    body: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(100) ]],
  });

  protected sendEmail() {
    const formValue = this.contactForm.value;
    const subject = `${formValue.name} - ${formValue.subject}`;
    const body = `${formValue.body}`;
    const url = `mailto:${env.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  }
}
