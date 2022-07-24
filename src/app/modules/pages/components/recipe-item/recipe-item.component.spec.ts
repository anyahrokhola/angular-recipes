import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ButtonModule } from 'src/app/modules/button/button.module';

import { RecipeItemComponent } from './recipe-item.component';

describe('RecipeItemComponent', () => {
	let spectator: Spectator<RecipeItemComponent>;
	const createComponent = createComponentFactory({ imports: [ButtonModule], component: RecipeItemComponent });

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
