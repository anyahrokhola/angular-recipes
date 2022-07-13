import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
	let spectator: Spectator<IntroComponent>;
	const createComponent = createComponentFactory(IntroComponent);

	beforeEach(() => (spectator = createComponent()));

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [IntroComponent],
		}).compileComponents();
	});
});
