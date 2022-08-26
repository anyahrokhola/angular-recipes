import { HttpClient } from '@angular/common/http';
import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { RecipesRestService } from 'src/app/modules/recipes/services';
import { OptionService } from 'src/app/services';
import { Recipe, SelectOption } from '../../../../models';
import { cookingForm } from '../../interfaces/recipe-cooking.form';
import { ingredientsForm } from '../../interfaces/recipe-ingredients.form';

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

	public getIngredientForm(index: number): FormGroup {
		return this.ingredients.get(index.toString()) as FormGroup;
	}

	public getCookingForm(index: number): FormGroup {
		return this.cooking.get(index.toString()) as FormGroup;
	}

	public addIngredients() {
		this.ingredients.push(new FormGroup(ingredientsForm));
	}

	public addCooking() {
		this.cooking.push(new FormGroup(cookingForm));
	}

	public removeIngredient(index: number) {
		this.ingredients.removeAt(index);
	}

	public removeCooking(index: number) {
		this.cooking.removeAt(index);
	}

	public async onSubmit() {
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
