import { Injectable } from '@angular/core';
import { SelectOption } from '../../models';
import { Category, Difficulty, Meal } from '../../models';
import { categoryI18n } from 'src/app/i18n/category.i18n';
import { difficultyI18n } from 'src/app/i18n/difficulty.i18n';
import { mealI18n } from 'src/app/i18n/meal.i18n';

@Injectable({
	providedIn: 'root',
})
export class OptionService {
	public getCategoryOptions(): Array<SelectOption<Category>> {
		return Object.values(Category).map(el => ({ value: el, text: categoryI18n[el] }));
	}

	public getDifficultyOptions(): Array<SelectOption<Difficulty>> {
		return Object.values(Difficulty).map(el => ({ value: el, text: difficultyI18n[el] }));
	}

	public getMealOptions(): Array<SelectOption<Meal>> {
		return Object.values(Meal).map(el => ({ value: el, text: mealI18n[el] }));
	}
}
