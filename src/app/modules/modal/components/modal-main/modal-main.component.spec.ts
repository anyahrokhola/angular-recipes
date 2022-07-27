import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { ModalMainComponent } from './modal-main.component';

describe('ModalMainComponent', () => {
	let spectator: Spectator<ModalMainComponent>;
	const createComponent = createComponentFactory({
		component: ModalMainComponent,
		declarations: [ModalMainComponent],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
