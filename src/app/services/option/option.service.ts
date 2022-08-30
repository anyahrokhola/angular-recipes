import { Injectable } from '@angular/core';
import { SelectOption } from '../../models';
import { Category, Difficulty, Meal } from '../../models';
import { categoryI18n } from 'src/app/i18n/category.i18n';
import { difficultyI18n } from 'src/app/i18n/difficulty.i18n';
import { mealI18n } from 'src/app/i18n/meal.i18n';
import { map } from 'lodash';

@Injectable({
	providedIn: 'root',
})
export class OptionService {
	public getCategoryOptions(): Array<SelectOption<Category>> {
		return OptionService.transformToSelectOptions(categoryI18n);
	}

	public getDifficultyOptions(): Array<SelectOption<Difficulty>> {
		return OptionService.transformToSelectOptions(difficultyI18n);
	}

	public getMealOptions(): Array<SelectOption<Meal>> {
		return OptionService.transformToSelectOptions(mealI18n);
	}

	public static transformToSelectOptions<E extends string | number>(data: Record<E, string>): Array<SelectOption<E>> {
		return map(data, (text, enumValue) => ({ value: enumValue, text })) as Array<SelectOption<E>>;
	}
}
