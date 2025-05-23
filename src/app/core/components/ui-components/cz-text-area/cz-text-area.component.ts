import { Component, input, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from "@angular/forms";
import { Textarea } from "primeng/textarea";
import { GroupFormControl } from "ng-group-controls";
import { CZFloatLabelComponent } from "../cz-float-label/cz-float-label.component";
import { CZFormErrorMessageComponent } from "../cz-form-error-message/cz-form-error-message.component";
import { CZTooltipBadgeComponent } from "../cz-tooltip-badge/cz-tooltip-badge.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'cz-text-area',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Textarea,
    CZFloatLabelComponent,
    CZFormErrorMessageComponent,
    CZTooltipBadgeComponent
  ],
  templateUrl: './cz-text-area.component.html'
})
export class CZTextAreaComponent extends GroupFormControl implements OnInit {
  
  protected formCtrlName: string = 'text';
  protected isRequired: boolean = false;

  // Input / Outputs  
  public showRequiredDot = input<boolean>(true);
  public showErrorMessage = input<boolean>(true);
  public maxChars = input<number>();
  
  public placeholder = input<string>();
  public floatLabel = input<string>();
  public helpText = input<string>();
  public tooltip = input<string>();
  
  // --- NG Methods --- //
  
  ngOnInit(): void {
    this.initInternalForm();
  }

  // --- Overridden Methods --- //

  protected override formControlsMap = (inboundVal: any) => 
    ({ [this.formCtrlName]: [inboundVal ?? ''] });
  
  protected override onValidatorChange = (newValidators: ValidatorFn[]) => {

    this.ctrl.clearValidators();
    
    if (!!newValidators)
      this.ctrl.addValidators(newValidators);

    this.isRequired = this.ctrl.hasValidator(Validators.required);
  };

  // --- Private Methods --- //

  protected get ctrl() { return this.internalForm?.controls[this.formCtrlName] }
}