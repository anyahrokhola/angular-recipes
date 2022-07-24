import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
	let spectator: Spectator<IntroComponent>;
	const createComponent = createComponentFactory(IntroComponent);

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
