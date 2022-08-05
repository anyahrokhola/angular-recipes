import { Directive, ElementRef, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';

@Directive({
	selector: '[validationError]',
})
export class ValidationErrorDirective implements OnInit {
	@Input('validationError') public formControl!: string | FormControl;

	private control!: Nullable<AbstractControl>;

	constructor(private elementRef: ElementRef, @Optional() private form?: FormGroupDirective) {}

	public ngOnInit(): void {
		this.control =
			this.formControl instanceof FormControl ? this.formControl : this.form?.form.get(this.formControl);

		if (!this.control) {
			return;
		}

		this.control.statusChanges.subscribe(() => {
			const validationError = this.control?.errors?.['validation'];
			this.elementRef.nativeElement.textContent = validationError || '';
		});
	}
}
