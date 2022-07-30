import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../../../models';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../../../../models/api';

@Component({
	selector: 'recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
	public item?: Recipe;

	constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

	public ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');

		this.httpClient
			.get<ApiResponse<Recipe>>(`http://localhost:1337/api/recipes/${id}?populate=*`)
			.subscribe(resp => {
				this.item = resp.data;
			});
	}
}
