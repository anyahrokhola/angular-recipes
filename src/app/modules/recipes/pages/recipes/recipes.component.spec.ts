import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { RecipeItemComponent } from 'src/app/modules/pages/components/recipe-item/recipe-item.component';
import { RecipeListComponent } from 'src/app/modules/pages/components/recipe-list/recipe-list.component';

import { RecipesComponent } from './recipes.component';

describe('RecipesComponent', () => {
	let spectator: Spectator<RecipesComponent>;
	const createComponent = createComponentFactory({
		imports: [],
		component: RecipesComponent,
		declarations: [RecipeListComponent, RecipeItemComponent],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
