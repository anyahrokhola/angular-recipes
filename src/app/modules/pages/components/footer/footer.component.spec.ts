import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { SocialMediaComponent } from '../social-media/social-media.component';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let spectator: Spectator<FooterComponent>;
	const createComponent = createComponentFactory({
		component: FooterComponent,
		declarations: [SocialMediaComponent],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
