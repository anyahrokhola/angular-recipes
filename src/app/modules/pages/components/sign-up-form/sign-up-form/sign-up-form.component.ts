import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NotifierService } from 'angular-notifier';
import { pickBy } from 'lodash';
import { PasswordValidators } from 'src/app/modules/validation/validators/passwords-validators';

export class PasswordErrorStateMatcher implements ErrorStateMatcher {
	public isErrorState(control: FormControl | null, form: FormGroupDirective): boolean {
		return !!((control?.invalid || form.errors?.['differentPasswords']) && (control?.dirty || control?.touched));
	}
}

@Component({
	selector: 'sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
	public visible = false;
	public changeType = false;
	public passwordErrorMatcher = new PasswordErrorStateMatcher();
	public signUpForm = new FormGroup(
		{
			name: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
			confirmPassword: new FormControl('', Validators.required),
		},
		{ validators: PasswordValidators.controlValueAreEqual('password', 'confirmPassword') }
	);

	constructor(private httpClient: HttpClient, private notifierService: NotifierService) {
		this.notifierService = notifierService;
	}

	public get nameControl(): FormControl {
		return this.signUpForm.controls['name'] as FormControl;
	}
	public get lastNameControl(): FormControl {
		return this.signUpForm.controls['lastName'] as FormControl;
	}
	public get emailControl(): FormControl {
		return this.signUpForm.controls['email'] as FormControl;
	}
	public get passwordControl(): FormControl {
		return this.signUpForm.controls['password'] as FormControl;
	}
	public get confirmPasswordControl(): FormControl {
		return this.signUpForm.controls['confirmPassword'] as FormControl;
	}

	public async onSubmit() {
		if (this.signUpForm.invalid) {
			this.signUpForm.markAllAsTouched();
			return;
		}
		try {
			const data = this.filterEmptyFields(this.signUpForm.value);
			await this.httpClient.post('/user-dates', { data: data }).toPromise();
			this.signUpForm.reset();
			this.signUpForm.markAsUntouched();
			this.notifierService.notify('success', 'Account successfully created');
		} catch (error) {
			this.notifierService.notify('wrong', 'Somethings wrong :(');
		}
	}

	public viewPass() {
		this.visible = !this.visible;
		this.changeType = !this.changeType;
	}

	private filterEmptyFields<T extends object>(data: T): Partial<T> {
		return pickBy(data, value => !!value);
	}
}
