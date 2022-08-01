import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator';

import { AssetsUrlPipe } from './assets-url.pipe';

describe('AssetsUrlPipe', () => {
	let spectator: SpectatorPipe<AssetsUrlPipe>;
	const createPipe = createPipeFactory({
		pipe: AssetsUrlPipe,
	});

	beforeEach(() => {
		spectator = createPipe(`<div>{{ 'Testing' | assetsUrl }}</div>`);
	});

	it('should create', () => {
		expect(spectator.element).toBeTruthy();
	});
});
