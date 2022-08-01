import { HttpClientModule } from '@angular/common/http';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { RecipeItemComponent } from 'src/app/modules/pages/components/recipe-item/recipe-item.component';
import { IntroComponent } from '../../components/intro/intro.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let spectator: Spectator<HomeComponent>;
	const createComponent = createComponentFactory({
		imports: [HttpClientModule],
		component: HomeComponent,
		declarations: [RecipeItemComponent, IntroComponent],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
