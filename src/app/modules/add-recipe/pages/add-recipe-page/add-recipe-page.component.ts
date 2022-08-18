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

	public url = '';
	public item?: Recipe;
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
		public route: ActivatedRoute,
		private recipesRestService: RecipesRestService,
		private notifierService: NotifierService
	) {}

	public get ingredients(): FormArray {
		return this.form.get('ingredients') as FormArray;
	}

	public get cooking(): FormArray {
		return this.form.get('cooking') as FormArray;
	}

	public ngOnInit(): void {
		this.isEdit = this.route.snapshot.paramMap.get('id') ? true : false;
		const id = this.route.snapshot.paramMap.get('id') as string;

		if (this.isEdit) {
			this.recipesRestService.getItem(id).subscribe(recipe => {
				this.item = recipe;
				this.form.get('name')?.setValue([recipe.name]);
				this.form.get('category')?.setValue(recipe.category);
				this.form.get('difficulty')?.setValue(recipe.difficulty);
				this.form.get('meal')?.setValue(recipe.meal);
				this.form.get('time')?.setValue([recipe.time]);
				this.form.get('description')?.setValue([recipe.description]);
			});
		}
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

	public removeImage() {
		this.form.get('img')?.reset();
		this.url = '';
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
		if (!this.isEdit) {
			try {
				const data = this.form.value;
				await this.httpClient.post('/recipes', { data: data }).toPromise();
				this.form.reset();
				this.form.markAsUntouched();
				this.notifierService.notify('success', 'Recipe successfully created');
			} catch (error) {
				this.notifierService.notify('error', 'Somethings wrong :(');
			}
		} else {
			this.notifierService.notify('info', 'Edit:(');
		}
	}
}
