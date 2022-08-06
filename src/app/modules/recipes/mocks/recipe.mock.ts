import { faker } from '@faker-js/faker';

import { Category, Difficulty, Meal, Recipe } from '../../../models';

export class RecipeMock implements Recipe {
	public category = faker.helpers.objectValue(Category);
	public cooking = [];
	public description = faker.random.words(20);
	public difficulty = faker.helpers.objectValue(Difficulty);
	public id = faker.datatype.number();
	public img = { data: null };
	public ingredients = [];
	public meal = faker.helpers.objectValue(Meal);
	public name = faker.name.jobTitle();
	public time = faker.datatype.number();
}
