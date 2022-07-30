import { HttpClient } from '@angular/common/http';
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
	public submitted = false;

	public signUpForm = new FormGroup({
		name: new FormControl('', Validators.required),
		lastName: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
	});

	constructor(private httpClient: HttpClient) {}

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
	// public get confirmPasswordControl(): FormControl {
	// 	return this.signUpForm.controls['confirmPassword'] as FormControl;
	// }

	public async onSubmit() {
		this.submitted = true;
		try {
			const data = this.filterEmptyFields(this.signUpForm.value);
			await this.httpClient.post('/user-dates', { data: data }).toPromise();
			this.signUpForm.reset();
			this.signUpForm.markAsUntouched();
			this.submitted = false;
			alert('Повідомлення успішно відправлено!');
		} catch (error) {
			alert('Щось пішло не так =(');
		}
	}

	private filterEmptyFields<T>(data: T): Partial<T> {
		const fields: Partial<T> = {};

		for (let key in data) {
			!!data[key] ? (fields[key] = data[key]) : key;
		}

		return fields;
	}
}
