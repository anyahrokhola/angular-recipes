import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';
import { of } from 'rxjs';

import { Category } from '../../../../models';
import { RecipeMock } from '../../mocks/recipe.mock';
import { RecipesRestService } from '../../services';
import { RecipeViewComponent } from './recipe-view.component';
import { AssetsUrlOrEmptyPipe } from '../../../../core/pipes/assets-url-or-empty/assets-url-or-empty.pipe';

describe('RecipeViewComponent', () => {
	const recipeId = faker.datatype.number();

	let spectator: SpectatorRouting<RecipeViewComponent>;
	const createComponent = createRoutingFactory({
		detectChanges: false,
		imports: [HttpClientModule],
		component: RecipeViewComponent,
		declarations: [AssetsUrlOrEmptyPipe],
		params: { id: recipeId },
	});

	let recipe: RecipeMock;
	let recipesRestService: RecipesRestService;

	beforeEach(() => {
		spectator = createComponent();
		recipesRestService = spectator.inject(RecipesRestService);

		recipe = new RecipeMock();
		recipe.category = Category.SaladAndSnack;
	});

	beforeEach(() => {
		spyOn(recipesRestService, 'getItem').and.returnValue(of(recipe));
	});

	beforeEach(() => {
		spectator.detectChanges();
	});

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});

	it('should request item by id from router', () => {
		expect(spectator.component.item).toEqual(recipe);
		expect(recipesRestService.getItem).toHaveBeenCalledOnceWith(recipeId);
	});

	// TODO: Anya fix issue with enums translations
	xit('should set category', () => {
		expect(spectator.query('[data-test="category"]')).toHaveText('Salad and Snack');
	});
});
