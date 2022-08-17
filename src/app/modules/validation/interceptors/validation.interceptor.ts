import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ValidationService } from '../services/validation.service';
import { StrapiErrorResponse } from '../models/validation';
import { Errors } from '../models/validation';
import { keyBy, mapValues } from 'lodash';

@Injectable()
export class ValidationInterceptor implements HttpInterceptor {
	constructor(private validationService: ValidationService) {}

	public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			tap(() => {
				this.validationService.setErrors({});
			}),
			catchError(err => {
				if (err instanceof HttpErrorResponse) {
					const strapiError: StrapiErrorResponse = err.error;
					const validationErrors = this.getErrorFromStrapiResponse(strapiError);

					this.validationService.setErrors(validationErrors);
				}

				return throwError(err);
			})
		);
	}

	private getErrorFromStrapiResponse({ error: { details } }: StrapiErrorResponse): Errors {
		// { email: StrapiError }
		const obj = keyBy(details.errors, error => error.path[0]);

		// { email: 'email is not valid' }
		return mapValues(obj, error => error.message);
	}
}
