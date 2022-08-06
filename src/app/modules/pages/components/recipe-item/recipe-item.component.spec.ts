import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { CoreModule } from 'src/app/core/core.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

import { RecipeItemComponent } from './recipe-item.component';

import { RecipeMock } from '../../../recipes/mocks/recipe.mock';

describe('RecipeItemComponent', () => {
	let spectator: Spectator<RecipeItemComponent>;
	const createComponent = createComponentFactory({
		imports: [ButtonModule, CoreModule],
		component: RecipeItemComponent,
	});

	beforeEach(() => (spectator = createComponent({ props: { item: new RecipeMock() } })));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
