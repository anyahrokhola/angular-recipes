import { Image } from './image';

export interface Recipe {
	category: Category;
	cooking: RecipeStep[];
	description: string;
	difficulty: Difficulty;
	id: number;
	img?: Image;
	meal: Meal;
	name: string;
	products: ProductInRecipe;
	time: number;
}

export interface RecipeStep {
	description: string;
	id: number;
	step: number;
}

export interface ProductInRecipe {
	count: number;
	id: number;
	product: string;
	unit: string;
}

export enum Category {
	FirstCourse = 'firstCourse',
	SecondCourse = 'secondCourse',
	SaladAndSnack = 'saladAndSnack',
	Baking = 'baking',
	Cakes = 'cakes',
	Desserts = 'desserts',
	Drinks = 'drinks',
}

export enum Difficulty {
	Easy = 'easy',
	Medium = 'medium',
	Hard = 'hard',
}

export enum Meal {
	Breakfast = 'breakfast',
	Lunch = 'lunch',
	Dinner = 'dinner',
	Snack = 'snack',
}
