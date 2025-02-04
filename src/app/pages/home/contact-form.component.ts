import { Component, inject } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzIconModule } from "ng-zorro-antd/icon";
import { CommonModule } from "@angular/common";
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
          <nz-form-label [nzSpan]="2" nzFor="name">Name</nz-form-label>
          <nz-form-control>
            <input nz-input 
              type="text"
              formControlName="name"
              name="name" 
              id="name" 
            />
          </nz-form-control>
        </nz-form-item>
  
        <nz-form-item>
          <nz-form-label [nzSpan]="2" nzFor="subject">Subject</nz-form-label>
          <nz-form-control>
            <input nz-input 
              type="text" 
              formControlName="subject"
              name="subject" 
              id="subject" 
            />
          </nz-form-control>
  
        </nz-form-item>
  
        <nz-form-item>
          <nz-form-label [nzSpan]="2" nzFor="body">Body</nz-form-label>
          <nz-form-control>
            <nz-textarea-count [nzMaxCharacterCount]="100">    
              <textarea nz-input 
                formControlName="body"
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
    console.log(this.contactForm.value);
  }
}
