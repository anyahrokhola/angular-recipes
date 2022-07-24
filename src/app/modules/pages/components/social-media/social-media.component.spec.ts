import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { SocialMediaComponent } from './social-media.component';

describe('SocialMediaComponent', () => {
	let spectator: Spectator<SocialMediaComponent>;
	const createComponent = createComponentFactory(SocialMediaComponent);

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
