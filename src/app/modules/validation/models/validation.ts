import { HttpStatusCode } from '@angular/common/http';

export type Errors = Record<string, string>;

export interface StrapiErrorResponse<Data = unknown> {
	data: Data;
	error: {
		details: {
			errors: StrapiError[];
		};
		message: string;
		name: string; // "ValidationError"
		status: HttpStatusCode;
	};
}

export interface StrapiError {
	message: string;
	name: string; // "ValidationError"
	path: string[]; // array of keys (['email'])
}
