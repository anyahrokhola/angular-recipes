import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
	public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: 'sign-up-form',
	templateUrl: './sign-up-form.component.html',
	styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
	public matcher = new MyErrorStateMatcher();
	public signUpForm = new FormGroup({
		name: new FormControl('', Validators.required),
		lastName: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
		confirmPassword: new FormControl('', Validators.required),
	});

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

	public send() {
		if (this.signUpForm.invalid) {
			this.signUpForm.markAllAsTouched();
			return;
		}

		this.signUpForm.reset();
		alert('Форма отправлена');
	}
}
