import { SpectatorDirective, createDirectiveFactory } from '@ngneat/spectator';

import { BtnLinkDirective } from './btn-link.directive';

describe('BtnLinkDirective', () => {
	let spectator: SpectatorDirective<BtnLinkDirective>;
	const createDirective = createDirectiveFactory({
		directive: BtnLinkDirective,
	});

	beforeEach(() => {
		spectator = createDirective(`<button btnLink>Text</button>`);
	});

	it('should create', () => {
		expect(spectator.directive).toBeTruthy();
	});

	it('should add classes', () => {
		expect(spectator.element).toHaveClass('button');
		expect(spectator.element).toHaveClass('button-link');
	});
});
