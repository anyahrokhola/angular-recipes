import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

import { ValidationService } from './validation.service';

xdescribe('ValidationService', () => {
	let spectator: SpectatorService<ValidationService>;
	const createService = createServiceFactory({
		service: ValidationService,
	});

	beforeEach(() => {
		spectator = createService();
	});

	it('should create', () => {
		expect(spectator.service).toBeTruthy();
	});
});
