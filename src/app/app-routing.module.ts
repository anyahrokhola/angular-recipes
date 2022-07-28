import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipePageComponent } from './modules/add-recipe/pages/add-recipe-page/add-recipe-page.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RecipesComponent } from './modules/recipes/pages/recipes/recipes.component';
import { RecipeComponent } from './modules/recipes/pages/recipe/recipe.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },

	{ path: 'recipes', component: RecipesComponent, pathMatch: 'full' },
	{ path: 'recipes/add', component: AddRecipePageComponent, pathMatch: 'full' },
	{ path: 'recipes/:id', component: RecipeComponent, pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
