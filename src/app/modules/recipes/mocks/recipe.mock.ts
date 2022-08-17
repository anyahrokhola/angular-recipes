import { faker } from '@faker-js/faker';
import { randomArrayClasses } from 'src/app/mocks/helper.mock';
import { ImageMock } from 'src/app/mocks/image.mock';

import { Category, Difficulty, Meal, Recipe } from '../../../models';
import { RecipeIngredientMock } from './recipe-ingredient.mock';
import { RecipeStepMock } from './recipe-step.mock';

export class RecipeMock implements Recipe {
	public category = faker.helpers.objectValue(Category);
	public cooking = randomArrayClasses(RecipeStepMock);
	public description = faker.random.words(20);
	public difficulty = faker.helpers.objectValue(Difficulty);
	public id = faker.datatype.number();
	public img = ImageMock();
	public ingredients = randomArrayClasses(RecipeIngredientMock);
	public meal = faker.helpers.objectValue(Meal);
	public name = faker.name.jobTitle();
	public time = faker.datatype.number();
}
