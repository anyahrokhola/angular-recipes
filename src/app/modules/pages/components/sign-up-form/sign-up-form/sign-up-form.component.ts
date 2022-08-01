import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { pickBy } from 'lodash';

@Component({
	selector: 'sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
	public signUpForm = new FormGroup({
		name: new FormControl('', Validators.required),
		lastName: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
		confirmPassword: new FormControl('', Validators.required),
	});

	private readonly notifier: NotifierService;

	constructor(private httpClient: HttpClient, notifierService: NotifierService) {
		this.notifier = notifierService;
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
			this.notifier.notify('error', 'Somethings wrong :(');
			this.signUpForm.markAllAsTouched();
			return;
		}

		if (!this.isConfirmPassword()) {
			this.notifier.notify('error', 'Passwords are different');
			return;
		}
		try {
			const data = this.filterEmptyFields(this.signUpForm.value);
			await this.httpClient.post('/user-dates', { data: data }).toPromise();
			this.signUpForm.reset();
			this.signUpForm.markAsUntouched();
			this.notifier.notify('success', 'Account successfully created');
		} catch (error) {
			this.notifier.notify('wrong', 'Somethings wrong :(');
		}
	}

	private filterEmptyFields<T extends object>(data: T): Partial<T> {
		return pickBy(data, value => !!value);
	}

	private isConfirmPassword() {
		return this.passwordControl.value === this.confirmPasswordControl.value;
	}
}
