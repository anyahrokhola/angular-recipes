import { SpectatorDirective, createDirectiveFactory } from '@ngneat/spectator';

import { BtnIntroDirective } from './btn-intro.directive';

describe('BtnIntroDirective', () => {
	let spectator: SpectatorDirective<BtnIntroDirective>;
	const createDirective = createDirectiveFactory({
		directive: BtnIntroDirective,
	});

	beforeEach(() => {
		spectator = createDirective(`<button btnIntro>Text</button>`);
	});

	it('should create', () => {
		expect(spectator.directive).toBeTruthy();
	});

	it('should add classes', () => {
		expect(spectator.element.classList.toString()).toContain('button button-outline button-intro');
	});
});
