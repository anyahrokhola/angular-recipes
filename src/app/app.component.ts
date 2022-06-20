import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OptionService } from './services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public readonly mealOptions = this.optionService.getMealOptions();
	public readonly categoryOptions = this.optionService.getCategoryOptions();
	public readonly difficultyOptions = this.optionService.getDifficultyOptions();

	public readonly form = new FormGroup({
		meal: new FormControl(),
		category: new FormControl(),
		difficulty: new FormControl(),
		test: new FormControl(),
	});

	constructor(private optionService: OptionService) {}

	public ngOnInit(): void {
		// eslint-disable-next-line no-console
		this.form.valueChanges.subscribe(value => console.log(value));
	}

	public onResetClick(): void {
		this.form.reset();
	}
}
