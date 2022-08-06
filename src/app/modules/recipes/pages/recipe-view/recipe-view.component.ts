import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../../../models';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../../../../models/api';

@Component({
	selector: 'recipe-view',
	templateUrl: './recipe-view.component.html',
	styleUrls: ['./recipe-view.component.scss'],
})
export class RecipeViewComponent implements OnInit {
	public item?: Recipe;

	constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

	public ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');

		this.httpClient.get<ApiResponse<Recipe>>(`/recipes/${id}`).subscribe(resp => {
			this.item = resp.data;
		});
	}
}