import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipePageComponent } from './modules/add-recipe/pages/add-recipe-page/add-recipe-page.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RecipesComponent } from './modules/recipes/pages/recipes/recipes.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'recipes', component: RecipesComponent },
	{ path: 'add-recipe-page', component: AddRecipePageComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
