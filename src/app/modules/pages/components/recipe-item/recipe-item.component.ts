import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../models';

@Component({
	selector: 'recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
	@Input() public item!: Recipe;
}
