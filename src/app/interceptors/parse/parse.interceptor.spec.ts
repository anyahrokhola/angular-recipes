import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ParseInterceptor } from './parse.interceptor';

import { parsedRecipeMock1, parsedRecipeMock2, recipeMock1, recipeMock2 } from '../../mocks/recipe.mock';

describe('ParseInterceptor', () => {
	let httpClient: HttpClient;
	let httpController: HttpTestingController;

	const meta = { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } };

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [{ provide: HTTP_INTERCEPTORS, useClass: ParseInterceptor, multi: true }],
		});
	});

	beforeEach(() => {
		httpClient = TestBed.inject(HttpClient);
		httpController = TestBed.inject(HttpTestingController);
	});

	it('should transform empty array', () => {
		httpClient.get('/test_url').subscribe(resp => {
			expect(resp).toEqual({ data: [], meta });
		});

		const testRequest = httpController.expectOne({ method: 'GET', url: '/test_url' });

		testRequest.flush({ data: [], meta });
		httpController.verify();
	});

	it('should transform object', () => {
		httpClient.get('/test_url').subscribe(resp => {
			expect(resp).toEqual({ data: parsedRecipeMock1, meta });
		});

		const testRequest = httpController.expectOne({ method: 'GET', url: '/test_url' });

		testRequest.flush({ data: recipeMock1, meta });
		httpController.verify();
	});

	it('should transform array', () => {
		httpClient.get('/test_url').subscribe(resp => {
			expect(resp).toEqual({ data: [parsedRecipeMock1, parsedRecipeMock2], meta });
		});

		const testRequest = httpController.expectOne({ method: 'GET', url: '/test_url' });

		testRequest.flush({ data: [recipeMock1, recipeMock2], meta });
		httpController.verify();
	});
});
