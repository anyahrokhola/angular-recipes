import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OptionService } from 'src/app/services';

@Component({
	selector: 'add-recipe-page',
	templateUrl: './add-recipe-page.component.html',
	styleUrls: ['./add-recipe-page.component.scss'],
})
export class AddRecipePageComponent {
	public readonly mealOptions = this.optionService.getMealOptions();
	public readonly categoryOptions = this.optionService.getCategoryOptions();
	public readonly difficultyOptions = this.optionService.getDifficultyOptions();

	public readonly form = new FormGroup({
		meal: new FormControl(),
		category: new FormControl(),
		difficulty: new FormControl(),
		name: new FormControl(),
		description: new FormControl(),
		time: new FormControl(),
	});

	constructor(private optionService: OptionService) {}

	public get nameControl(): FormControl {
		return this.form.controls['name'] as FormControl;
	}

	public get descriptionControl(): FormControl {
		return this.form.controls['description'] as FormControl;
	}

	public get timeControl(): FormControl {
		return this.form.controls['time'] as FormControl;
	}
}
