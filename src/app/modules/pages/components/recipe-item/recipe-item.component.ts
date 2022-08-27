import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Recipe } from '../../../../models';

@Component({
	selector: 'recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
	@Input() public item!: Recipe;
	public id?: string;

	constructor(private httpClient: HttpClient, private notifierService: NotifierService) {}

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
