import { HttpClientModule } from '@angular/common/http';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { RecipeViewComponent } from './recipe-view.component';

describe('RecipeViewComponent', () => {
	let spectator: Spectator<RecipeViewComponent>;
	const createComponent = createComponentFactory({
		imports: [HttpClientModule],
		component: RecipeViewComponent,
	});

	it('should create', () => {
		spectator = createComponent();

		expect(spectator.component).toBeTruthy();
	});
});
