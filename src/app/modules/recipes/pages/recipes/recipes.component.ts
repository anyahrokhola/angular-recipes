import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models';

@Component({
	selector: 'recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
	public data: Recipe[] = [];

	constructor(private httpClient: HttpClient) {}

	public ngOnInit(): void {
		this.httpClient.get<{ data: Recipe[] }>('http://localhost:1337/api/recipes?populate=*').subscribe(resp => {
			// @ts-ignore
			this.data = resp.data.map(item => ({ id: item.id, ...item.attributes }));

			console.log(this.data)
		});
	}
}
