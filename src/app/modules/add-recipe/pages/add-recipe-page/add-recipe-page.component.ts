import { HttpClient } from '@angular/common/http';
import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { RecipesRestService } from 'src/app/modules/recipes/services';
import { OptionService } from 'src/app/services';
import { Recipe, SelectOption } from '../../../../models';
import { getCookingForm } from '../../interfaces/recipe-cooking.form';
import { getIngredientsForm } from '../../interfaces/recipe-ingredients.form';

@Component({
	selector: 'add-recipe-page',
	templateUrl: './add-recipe-page.component.html',
	styleUrls: ['./add-recipe-page.component.scss'],
})
export class AddRecipePageComponent<Value extends string | number = string | number> implements OnInit {
	@ContentChild('customItem') public customItemRef?: TemplateRef<{ $implicit: SelectOption<Value>; index: number }>;
	public item?: Recipe;
	public id?: string;
	public isEdit?: boolean;
	public readonly mealOptions = this.optionService.getMealOptions();
	public readonly categoryOptions = this.optionService.getCategoryOptions();
	public readonly difficultyOptions = this.optionService.getDifficultyOptions();

	public readonly form = new FormGroup({
		img: new FormControl(),
		meal: new FormControl(null, Validators.required),
		category: new FormControl(null, Validators.required),
		difficulty: new FormControl(null, Validators.required),
		name: new FormControl('', Validators.required),
		description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
		time: new FormControl(null, Validators.required),
		ingredients: new FormArray([getIngredientsForm()]),
		cooking: new FormArray([getCookingForm({ step: 1 })]),
	});

	constructor(
		private httpClient: HttpClient,
		private optionService: OptionService,
		private notifierService: NotifierService,
		private route: ActivatedRoute,
		private recipesRestService: RecipesRestService
	) {}

	public get ingredients(): FormArray {
		return this.form.get('ingredients') as FormArray;
	}

	public get cooking(): FormArray {
		return this.form.get('cooking') as FormArray;
	}

	public ngOnInit(): void {
		this.isEdit = this.route.snapshot.paramMap.get('id') ? true : false;
		this.id = this.route.snapshot.paramMap.get('id') as string;
		if (this.isEdit) {
			this.recipesRestService.getItem(this.id).subscribe(recipe => {
				this.item = recipe;
				recipe.ingredients.forEach(() => this.addIngredients());
				recipe.cooking.forEach(() => this.addCooking());

				this.ingredients.removeAt(this.ingredients.length - 1);
				this.cooking.removeAt(this.cooking.length - 1);

				this.form.patchValue(recipe);
			});
		}
	}

	public getCookingForm(index: number): FormGroup {
		return this.cooking.get(index.toString()) as FormGroup;
	}

	public addIngredients() {
		this.ingredients.push(getIngredientsForm());
	}

	public addCooking() {
		this.cooking.push(getCookingForm({ step: this.cooking.length + 1 }));
	}

	public removeIngredient(index: number) {
		this.ingredients.removeAt(index);
	}

	public removeCooking(index: number) {
		this.cooking.removeAt(index);
	}

	public async onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			this.notifierService.notify('warning', 'Please, fill the fields');
			return;
		}
		const data = this.form.value;
		if (!this.isEdit) {
			try {
				await this.httpClient.post('/recipes', { data }).toPromise();
				this.form.reset();
				this.form.markAsUntouched();
				this.notifierService.notify('success', 'Recipe successfully created');
			} catch (error) {
				this.notifierService.notify('error', 'Somethings wrong :(');
			}
		} else {
			try {
				await this.httpClient.put(`/recipes/${this.id}`, { data }).toPromise();
				this.form.reset();
				this.form.markAsUntouched();
				this.notifierService.notify('info', 'Edit!');
			} catch (error) {
				this.notifierService.notify('error', 'Somethings wrong :(');
			}
		}
	}
}
