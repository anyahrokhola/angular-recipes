import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../../models';
import { ActivatedRoute } from '@angular/router';
import { RecipesRestService } from '../../services';
import { categoryI18n } from 'src/app/i18n/category.i18n';

@Component({
	selector: 'recipe-view',
	templateUrl: './recipe-view.component.html',
	styleUrls: ['./recipe-view.component.scss'],
})
export class RecipeViewComponent implements OnInit {
	public readonly categoryI18n = categoryI18n;

	public item?: Recipe;

	constructor(private route: ActivatedRoute, private recipesRestService: RecipesRestService) {}

	public ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id') as string;

		this.recipesRestService.getItem(id).subscribe(recipe => {
			this.item = recipe;
		});
	}
}
