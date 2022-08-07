import { faker } from '@faker-js/faker';

import { RecipeStep } from '../../../models';

export class RecipeStepMock implements RecipeStep {
	public id = faker.datatype.number();
	public step = faker.datatype.number();
	public cooking = faker.random.words(30);
}
