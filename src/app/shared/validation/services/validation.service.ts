import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Errors } from '../models/validation';

const errors$ = new BehaviorSubject<Errors>({});

@Injectable({
	providedIn: 'root',
})
export class ValidationService {
	public readonly errors$ = errors$.asObservable();

	public setErrors(errors: Nullable<Errors>): void {
		errors$.next(errors || {});
	}

	public clearErrors(): void {
		errors$.next({});
	}
}
