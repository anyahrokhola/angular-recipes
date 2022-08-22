import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { RecipesRestService } from 'src/app/modules/recipes/services';
import { Recipe } from '../../../../models';

@Component({
	selector: 'recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
	@Input() public item!: Recipe;
	public id?: string;
	public data: Recipe[] = [];

	constructor(
		private httpClient: HttpClient,
		public route: ActivatedRoute,

		private notifierService: NotifierService,
		private RecipesRestService: RecipesRestService
	) {}

	public ngOnInit(): void {
		this.RecipesRestService.getList().subscribe(data => {
			this.data = data;
		});
	}
	public async removeRecipe(index: number) {
		try {
			await this.httpClient.delete(`/recipes/${index}`).toPromise();
			this.notifierService.notify('info', 'Delete!');
			window.location.reload();
		} catch (error) {
			this.notifierService.notify('error', 'Somethings wrong :(');
		}
	}
}
