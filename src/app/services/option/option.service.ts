import { Injectable } from '@angular/core';
import { SelectOption } from '../../modules/form/models';
import { Category, Difficulty, Meal } from '../../models';

@Injectable({
	providedIn: 'root',
})
export class OptionService {
	public getCategoryOptions(): Array<SelectOption<Category>> {
		return [
			{ value: Category.FirstCourse, text: 'FirstCourse' },
			{ value: Category.SecondCourse, text: 'SecondCourse' },
			{ value: Category.SaladAndSnack, text: 'SaladAndSnack' },
			{ value: Category.Baking, text: 'Baking' },
			{ value: Category.Cakes, text: 'Cakes' },
			{ value: Category.Desserts, text: 'Desserts' },
			{ value: Category.Drinks, text: 'Drinks' },
		];
	}

	public getDifficultyOptions(): Array<SelectOption<Difficulty>> {
		return [
			{ value: Difficulty.Easy, text: 'Easy' },
			{ value: Difficulty.Medium, text: 'Medium' },
			{ value: Difficulty.Hard, text: 'Hard' },
		];
	}

	public getMealOptions(): Array<SelectOption<Meal>> {
		return [
			{ value: Meal.Breakfast, text: 'Breakfast' },
			{ value: Meal.Lunch, text: 'Lunch' },
			{ value: Meal.Dinner, text: 'Dinner' },
			{ value: Meal.Snack, text: 'Snack' },
		];
	}
}
