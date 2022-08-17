import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models';
import { RecipesRestService } from '../../../recipes/services';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public data: Recipe[] = [];

	constructor(private RecipesRestService: RecipesRestService) {}

	public ngOnInit(): void {
		this.RecipesRestService.getList().subscribe(data => {
			this.data = data;
		});
	}
}
