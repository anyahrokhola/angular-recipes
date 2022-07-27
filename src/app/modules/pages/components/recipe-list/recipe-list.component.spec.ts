import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';

import { RecipeListComponent } from './recipe-list.component';

describe('RecipeListComponent', () => {
	let spectator: Spectator<RecipeListComponent>;
	const createComponent = createComponentFactory({
		imports: [ButtonModule],
		component: RecipeListComponent,
		declarations: [RecipeItemComponent],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
