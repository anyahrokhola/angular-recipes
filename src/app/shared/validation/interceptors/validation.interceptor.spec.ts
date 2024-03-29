import { TestBed } from '@angular/core/testing';

import { ValidationInterceptor } from './validation.interceptor';

xdescribe('ValidationInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [ValidationInterceptor],
		})
	);

	it('should be created', () => {
		const interceptor: ValidationInterceptor = TestBed.inject(ValidationInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
