import { Category, Difficulty, Meal } from '../models';
import { imageMock1, parsedImageMock } from './image.mock';

export const recipeMock1 = {
	id: 8,
	attributes: {
		category: Category.SecondCourse,
		cooking: [],
		createdAt: '2022-07-28T14:59:43.569Z',
		description: null,
		difficulty: Difficulty.Easy,
		img: { data: imageMock1 },
		ingredients: [
			{ id: 1, product: 'potato', count: 1, unit: 'un' },
			{ id: 11, product: 'sault', count: 2, unit: 'spoon' },
		],
		meal: Meal.Lunch,
		name: 'potato free',
		publishedAt: '2022-07-28T16:35:54.254Z',
		time: 30,
		updatedAt: '2022-07-30T08:39:26.124Z',
	},
};
export const parsedRecipeMock1 = { id: 8, ...recipeMock1.attributes, img: parsedImageMock };

export const recipeMock2 = {
	id: 10,
	attributes: {
		category: Category.Baking,
		cooking: [],
		createdAt: '2022-07-29T14:07:13.386Z',
		description: null,
		difficulty: Difficulty.Medium,
		img: { data: null },
		ingredients: [
			{ id: 18, product: 'beet', count: 2, unit: 'un' },
			{ id: 19, product: 'carrot', count: 1, unit: 'un' },
			{ id: 20, product: 'onion', count: 3, unit: 'un' },
			{ id: 21, product: 'tomato paste', count: 2, unit: 'large spoon' },
			{ id: 22, product: 'oil', count: 5, unit: 'large spoon' },
			{ id: 23, product: 'pork', count: 400, unit: 'g' },
			{ id: 24, product: 'potato', count: 4, unit: 'un' },
			{ id: 25, product: 'cabbage', count: 300, unit: 'g' },
		],
		meal: Meal.Lunch,
		name: 'Borsch',
		publishedAt: '2022-07-29T14:07:14.658Z',
		time: 60,
		updatedAt: '2022-07-30T08:39:22.325Z',
	},
};
export const parsedRecipeMock2 = { id: 10, ...recipeMock2.attributes };
