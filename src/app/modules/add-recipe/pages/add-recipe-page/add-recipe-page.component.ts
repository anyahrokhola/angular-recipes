import { HttpClient } from '@angular/common/http';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { SelectOption } from 'src/app/modules/form/models';
import { OptionService } from 'src/app/services';

@Component({
	selector: 'add-recipe-page',
	templateUrl: './add-recipe-page.component.html',
	styleUrls: ['./add-recipe-page.component.scss'],
})
export class AddRecipePageComponent<Value extends string | number = string | number> {
	@ContentChild('customItem') public customItemRef?: TemplateRef<{ $implicit: SelectOption<Value>; index: number }>;

	public url = '';
	public readonly mealOptions = this.optionService.getMealOptions();
	public readonly categoryOptions = this.optionService.getCategoryOptions();
	public readonly difficultyOptions = this.optionService.getDifficultyOptions();

	public readonly form = new FormGroup({
		img: new FormControl(),
		meal: new FormControl(),
		category: new FormControl(),
		difficulty: new FormControl(),
		name: new FormControl(),
		description: new FormControl(),
		time: new FormControl(),
		ingredients: new FormArray([
			new FormGroup({
				product: new FormControl(),
				count: new FormControl(),
				unit: new FormControl(),
			}),
		]),
		cooking: new FormArray([
			new FormGroup({
				step: new FormControl(),
				cooking: new FormControl(),
			}),
		]),
	});
	constructor(
		private httpClient: HttpClient,
		private notifierService: NotifierService,
		private optionService: OptionService
	) {
		this.notifierService = notifierService;
	}

	public get ingredients(): FormArray {
		return this.form.get('ingredients') as FormArray;
	}

	public get cooking(): FormArray {
		return this.form.get('cooking') as FormArray;
	}

	public getIngredientForm(index: number): FormGroup {
		return this.ingredients.get(index.toString()) as FormGroup;
	}

	public getCookingForm(index: number): FormGroup {
		return this.cooking.get(index.toString()) as FormGroup;
	}

	public onSelectFile(event: any) {
		if (event.target.files) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.onload = (event: any) => {
				this.url = event.target.result;
			};
		}
	}

	public addIngredients() {
		this.ingredients.push(
			new FormGroup({
				product: new FormControl(),
				count: new FormControl(),
				unit: new FormControl(),
			})
		);
	}

	public addCooking() {
		this.cooking.push(
			new FormGroup({
				step: new FormControl(),
				cooking: new FormControl(),
			})
		);
	}

	public removeIngredient(index: number) {
		this.ingredients.removeAt(index);
	}

	public removeCooking(index: number) {
		this.cooking.removeAt(index);
	}

	public async onSubmit() {
		try {
			const data = this.form.value;
			await this.httpClient.post('/recipes', { data: data }).toPromise();
			this.form.reset();
			this.form.markAsUntouched();
			this.notifierService.notify('success', 'Recipe successfully created');
		} catch (error) {
			this.notifierService.notify('wrong', 'Somethings wrong :(');
		}
	}
}
