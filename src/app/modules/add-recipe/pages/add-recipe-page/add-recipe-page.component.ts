import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectOption } from 'src/app/modules/form/models';
import { OptionService } from 'src/app/services';

@Component({
	selector: 'add-recipe-page',
	templateUrl: './add-recipe-page.component.html',
	styleUrls: ['./add-recipe-page.component.scss'],
})
export class AddRecipePageComponent<Value extends string | number = string | number> {
	public options!: Array<SelectOption<Value>>;
	public url = 'assets/add-icon.png';
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

	public onSelectFile(event: any) {
		if (event.target.files) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.onload = (event: any) => {
				this.url = event.target.result;
			};
		}
	}
}
