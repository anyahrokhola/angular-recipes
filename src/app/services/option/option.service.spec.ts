import { SpectatorService, createServiceFactory } from '@ngneat/spectator';

import { OptionService } from './option.service';

import { EnumHelper } from '../../helpers';

import { Category, Difficulty, Meal } from '../../models';

describe('OptionService', () => {
	let spectator: SpectatorService<OptionService>;
	const createService = createServiceFactory(OptionService);

	beforeEach(() => (spectator = createService()));

	it('should create', () => {
		expect(spectator.service).toBeTruthy();
	});

	describe('getCategoryOptions', () => {
		it('should cover each enum value', () => {
			const values = EnumHelper.getEnumValues(Category);
			const options = spectator.service.getCategoryOptions();

			expect(options.length).toEqual(values.length);
		});
	});

	describe('getDifficultyOptions', () => {
		it('should cover each enum value', () => {
			const values = EnumHelper.getEnumValues(Difficulty);
			const options = spectator.service.getDifficultyOptions();

			expect(options.length).toEqual(values.length);
		});
	});

	describe('getMealOptions', () => {
		it('should cover each enum value', () => {
			const values = EnumHelper.getEnumValues(Meal);
			const options = spectator.service.getMealOptions();

			expect(options.length).toEqual(values.length);
		});
	});
});
