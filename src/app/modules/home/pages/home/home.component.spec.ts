import { HttpClientModule } from '@angular/common/http';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { of } from 'rxjs';

import { RecipesRestService } from '../../../recipes/services';

import { HomeComponent } from './home.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { RecipeItemComponent } from '@shared/pages/components/recipe-item/recipe-item.component';

import { AssetsUrlOrEmptyPipe } from '../../../../core/pipes/assets-url-or-empty/assets-url-or-empty.pipe';

import { RecipeMock } from '../../../recipes/mocks/recipe.mock';

describe('HomeComponent', () => {
	let spectator: Spectator<HomeComponent>;
	const createComponent = createComponentFactory({
		detectChanges: false,
		imports: [HttpClientModule],
		component: HomeComponent,
		declarations: [RecipeItemComponent, IntroComponent, AssetsUrlOrEmptyPipe],
	});

	let recipe1: RecipeMock;
	let recipe2: RecipeMock;

	let recipesRestService: RecipesRestService;

	beforeEach(() => {
		spectator = createComponent();
		recipesRestService = spectator.inject(RecipesRestService);

		recipe1 = new RecipeMock();
		recipe2 = new RecipeMock();
	});

	beforeEach(() => {
		spyOn(recipesRestService, 'getList').and.returnValue(of([recipe1, recipe2]));
	});

	beforeEach(() => {
		spectator.detectChanges();
	});

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});

	it('should request item by id from router', () => {
		expect(spectator.component.data).toEqual([recipe1, recipe2]);
		expect(recipesRestService.getList).toHaveBeenCalledOnceWith();
	});
});
