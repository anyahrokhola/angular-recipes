import { SpectatorDirective, createDirectiveFactory } from '@ngneat/spectator';

import { ValidationErrorDirective } from './validation-error.directive';

xdescribe('ValidationErrorDirective', () => {
	let spectator: SpectatorDirective<ValidationErrorDirective>;
	const createDirective = createDirectiveFactory({
		directive: ValidationErrorDirective,
	});

	beforeEach(() => {
		spectator = createDirective(`<div validationError></div>`);
	});

	it('should create', () => {
		expect(spectator.directive).toBeTruthy();
	});
});
