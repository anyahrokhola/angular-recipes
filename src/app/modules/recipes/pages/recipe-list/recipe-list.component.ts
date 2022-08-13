import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models';
import { RecipesRestService } from '../../services';

@Component({
	selector: 'recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
	public data: Recipe[] = [];

	constructor(private RecipesRestService: RecipesRestService) {}

	public ngOnInit(): void {
		this.RecipesRestService.getList().subscribe(data => {
			this.data = data;
			console.log(data);
		});
	}
}
