import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AutoPopulateInterceptor } from './auto-populate.interceptor';

describe('AutoPopulateInterceptor', () => {
	let httpClient: HttpClient;
	let httpController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [{ provide: HTTP_INTERCEPTORS, useClass: AutoPopulateInterceptor, multi: true }],
		});
	});

	beforeEach(() => {
		httpClient = TestBed.inject(HttpClient);
		httpController = TestBed.inject(HttpTestingController);
	});

	it('should add populate * to each GET request', () => {
		httpClient.get('/test_url').subscribe(resp => {
			expect(resp).toEqual({});
		});

		const testRequest = httpController.expectOne({ method: 'GET', url: '/test_url?populate=*' });

		testRequest.flush({});
		httpController.verify();
	});

	it('should not add populate * if request is not GET', () => {
		httpClient.delete('/test_delete_url').subscribe(resp => {
			expect(resp).toEqual({});
		});

		const testRequest = httpController.expectOne({ method: 'DELETE', url: '/test_delete_url' });

		testRequest.flush({});
		httpController.verify();
	});
});
