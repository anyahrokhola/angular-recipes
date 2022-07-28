import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../models';

@Component({
	selector: 'recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
	@Input() public data: Recipe[] = [];
}
