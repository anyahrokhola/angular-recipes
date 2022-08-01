import { Directive, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxValidationMessagesComponent } from '@lagoshny/ngx-validation-messages';

@Directive({
	selector: '[formControlValidation]',
})
export class FormControlValidationDirective implements OnInit {
	constructor(private ngControl: NgControl, private validationComponent: NgxValidationMessagesComponent) {}

	public ngOnInit(): void {
		this.validationComponent.formControl = this.ngControl.control;
	}
}
