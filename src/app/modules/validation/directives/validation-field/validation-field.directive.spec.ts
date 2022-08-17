import { SpectatorDirective, createDirectiveFactory } from '@ngneat/spectator';

import { ValidationFieldDirective } from './validation-field.directive';

xdescribe('ValidationFieldDirective', () => {
	let spectator: SpectatorDirective<ValidationFieldDirective>;
	const createDirective = createDirectiveFactory({
		directive: ValidationFieldDirective,
	});

	beforeEach(() => {
		spectator = createDirective(`<div validationField></div>`);
	});

	it('should create', () => {
		expect(spectator.directive).toBeTruthy();
	});
});
