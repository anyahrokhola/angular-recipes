import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator';

import { AssetsUrlOrEmptyPipe } from './assets-url-or-empty.pipe';

describe('AssetsUrlOrEmptyPipe', () => {
	let spectator: SpectatorPipe<AssetsUrlOrEmptyPipe>;
	const createPipe = createPipeFactory({
		pipe: AssetsUrlOrEmptyPipe,
	});

	beforeEach(() => {
		spectator = createPipe(`<div>{{ 'Testing' | assetsUrlOrEmpty }}</div>`);
	});

	it('should create', () => {
		expect(spectator.element).toBeTruthy();
	});
});
