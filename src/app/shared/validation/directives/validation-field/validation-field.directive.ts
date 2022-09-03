import { Directive, Host, Input, OnDestroy, OnInit } from '@angular/core';
import { ValidationService } from '../../services/validation.service';
import { filter, Subscription } from 'rxjs';
import { NgControl } from '@angular/forms';
import { isEmpty } from 'lodash';

@Directive({
	selector: '[validationField]',
})
export class ValidationFieldDirective implements OnInit, OnDestroy {
	@Input('validationField') public fieldName?: string; // Field name

	public validationSub!: Subscription;

	constructor(@Host() private ngControl: NgControl, private validationService: ValidationService) {}

	public ngOnInit(): void {
		this.validationSub = this.validationService.errors$
			.pipe(filter(errors => !isEmpty(errors)))
			.subscribe(errors => {
				const fieldName = this.fieldName || this.ngControl.name;
				const elementError = fieldName ? errors[fieldName] : null;

				if (elementError) {
					this.ngControl.control?.setErrors({ validation: elementError });
				}
			});
	}

	public ngOnDestroy(): void {
		this.validationSub.unsubscribe();
	}
}
