import { Time } from '@angular/common';

export interface Recipe {
	category: Category;
	description: string;
	difficulty: string;
	id: number;
	img: string;
	meal: Meal;
	name: string;
	products: ProductInRecipe;
	time: Time;
}

export interface ProductInRecipe {
	count: number;
	id: number;
	unit: string;
}

export const enum Category {
	FirstСourse,
	SecondСourse,
	SaladAndSnack,
	Baking,
	Cakes,
	Desserts,
	Drinks,
}

export const enum Meal {
	Breakfast,
	Lunch,
	Dinner,
	Snack,
}
