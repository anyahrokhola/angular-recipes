import { SpectatorHttp, createHttpFactory, HttpMethod } from '@ngneat/spectator';

import { RecipesRestService } from './recipes-rest.service';

import { RecipeMock } from '../../mocks/recipe.mock';

describe('RecipesRestService', () => {
	let spectator: SpectatorHttp<RecipesRestService>;
	const createHttp = createHttpFactory({
		service: RecipesRestService,
	});

	beforeEach(() => {
		spectator = createHttp();
	});

	it('should create', () => {
		expect(spectator.service).toBeTruthy();
	});

	it('getList', () => {
		const recipe1 = new RecipeMock();
		const recipe2 = new RecipeMock();

		spectator.service.getList().subscribe(data => {
			expect(data).toEqual([recipe1, recipe2]);
		});

		const req = spectator.expectOne('/recipes', HttpMethod.GET);
		spectator.flushAll([req], [{ data: [recipe1, recipe2] }]);
	});

	it('getItem', () => {
		const recipe = new RecipeMock();

		spectator.service.getItem(recipe.id).subscribe(data => {
			expect(data).toEqual(recipe);
		});

		const req = spectator.expectOne(`/recipes/${recipe.id}`, HttpMethod.GET);
		spectator.flushAll([req], [{ data: recipe }]);
	});
});
