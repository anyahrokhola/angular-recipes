import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models';
import { ApiResponse } from '../../../../models/api';

@Component({
	selector: 'recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
	public data: Recipe[] = [];

	constructor(private httpClient: HttpClient) {}

	public ngOnInit(): void {
		this.httpClient.get<ApiResponse<Recipe[]>>('/recipes').subscribe(resp => {
			this.data = resp.data;
		});
	}
}
