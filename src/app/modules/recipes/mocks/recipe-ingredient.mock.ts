import { faker } from '@faker-js/faker';

import { RecipeIngredient } from '../../../models';

const units = ['un', 'kg', 'g', 'ml', 'l'];

export class RecipeIngredientMock implements RecipeIngredient {
	public id = faker.datatype.number();
	public product = faker.random.word();
	public count = faker.datatype.number();
	public unit = faker.helpers.arrayElement(units);
}
