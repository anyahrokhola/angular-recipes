import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OptionService } from './services';
import { MatDialog } from '@angular/material/dialog';
import { InputTextComponent } from './modules/form/components/input-text/input-text.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

	constructor(private optionService: OptionService, private dialog: MatDialog) {}

	public ngOnInit(): void {
		// eslint-disable-next-line no-console
		this.form.valueChanges.subscribe(value => console.log(value));
	}

	public onResetClick(): void {
		this.form.reset();
	}

	public openDialog() {
		// eslint-disable-next-line no-console
		this.dialog.open(InputTextComponent, {
			height: '400px',
			width: '600px',
		});
	}
}
