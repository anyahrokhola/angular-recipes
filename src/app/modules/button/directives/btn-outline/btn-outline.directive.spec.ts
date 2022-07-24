import { SpectatorDirective, createDirectiveFactory } from '@ngneat/spectator';

import { BtnOutlineDirective } from './btn-outline.directive';

describe('BtnOutlineDirective', () => {
	let spectator: SpectatorDirective<BtnOutlineDirective>;
	const createDirective = createDirectiveFactory({
		directive: BtnOutlineDirective,
	});

	beforeEach(() => {
		spectator = createDirective(`<button btnOutline>Text</button>`);
	});

	it('should create', () => {
		expect(spectator.directive).toBeTruthy();
	});

	it('should add classes', () => {
		expect(spectator.element.classList.toString()).toContain('button button-outline');
	});

	it('should create svg', () => {
		expect(spectator.query('svg')).toBeTruthy();
	});
});
