import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public data: Recipe[] = [];

	constructor(private httpClient: HttpClient) {}

	public ngOnInit(): void {
		this.httpClient.get<{ data: Recipe[] }>('/recipes').subscribe(resp => {
			this.data = resp.data;
		});
	}
}
