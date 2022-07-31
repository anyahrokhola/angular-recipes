import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { RecipeItemComponent } from 'src/app/modules/pages/components/recipe-item/recipe-item.component';

import { RecipeListComponent } from './recipe-list.component';

describe('RecipeListComponent', () => {
	let spectator: Spectator<RecipeListComponent>;
	const createComponent = createComponentFactory({
		imports: [],
		component: RecipeListComponent,
		declarations: [RecipeListComponent, RecipeItemComponent],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
