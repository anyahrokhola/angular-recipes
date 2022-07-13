import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { SocialMediaComponent } from './social-media.component';

describe('SocialMediaComponent', () => {
	let spectator: Spectator<SocialMediaComponent>;
	const createComponent = createComponentFactory(SocialMediaComponent);

	beforeEach(() => (spectator = createComponent()));

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SocialMediaComponent],
		}).compileComponents();
	});
});
