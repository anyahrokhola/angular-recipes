import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OptionService } from './services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public readonly mealOptions = this.optionService.getMealOptions();
	public readonly categoryOptions = this.optionService.getCategoryOptions();
	public readonly difficultyOptions = this.optionService.getDifficultyOptions();
	public nameControl = new FormControl();

	public readonly form = new FormGroup({
		meal: new FormControl(),
		category: new FormControl(),
		difficulty: new FormControl(),
		test: new FormControl(),
	});

	constructor(private optionService: OptionService) {}

	public onResetClick(): void {
		this.form.reset();
	}
}
