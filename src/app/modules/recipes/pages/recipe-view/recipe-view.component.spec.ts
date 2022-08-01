import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { RecipeViewComponent } from './recipe-view.component';

describe('RecipeViewComponent', () => {
	let spectator: Spectator<RecipeViewComponent>;
	const createComponent = createComponentFactory(RecipeViewComponent);

	it('should create', () => {
		spectator = createComponent();

		expect(spectator.component).toBeTruthy();
	});
});
