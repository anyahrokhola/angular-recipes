import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidators {
	public static controlValueAreEqual(
		passwordControlName: string,
		passwordConfirmControlName: string
	): ValidatorFn | null {
		return (formGroup: AbstractControl): ValidationErrors | null => {
			const passswordControl = formGroup.get(passwordControlName);
			const passswordConfirmControl = formGroup.get(passwordConfirmControlName);

			return passswordControl?.value === passswordConfirmControl?.value ? null : { differentPasswords: true };
		};
	}
}
