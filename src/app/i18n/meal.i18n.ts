import { Meal } from '../models';

export const mealI18n: Record<Meal, string> = {
	[Meal.Breakfast]: 'Breakfast',
	[Meal.Lunch]: 'Lunch',
	[Meal.Dinner]: 'Dinner',
	[Meal.Snack]: 'Snack',
};
