import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiInterceptor } from './api.interceptor';

import { environment } from '@env/environment';

describe('ApiInterceptor', () => {
	let httpClient: HttpClient;
	let httpController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
		});
	});

	beforeEach(() => {
		httpClient = TestBed.inject(HttpClient);
		httpController = TestBed.inject(HttpTestingController);
	});

	it('should add base api path', () => {
		httpClient.delete('/test_url').subscribe();

		const testRequest = httpController.expectOne({ method: 'DELETE', url: `${environment.api}/test_url` });

		testRequest.flush({});
		httpController.verify();
	});
});
