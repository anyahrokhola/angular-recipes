import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipePageComponent } from './modules/add-recipe/pages/add-recipe-page/add-recipe-page.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RecipeListComponent } from './modules/recipes/pages/recipe-list/recipe-list.component';
import { RecipeViewComponent } from './modules/recipes/pages/recipe-view/recipe-view.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },

	{ path: 'recipes', component: RecipeListComponent, pathMatch: 'full' },
	{ path: 'recipes/add', component: AddRecipePageComponent, pathMatch: 'full' },
	{ path: 'recipes/:id', component: RecipeViewComponent, pathMatch: 'full' },
	{ path: 'recipes/:id/edit', component: AddRecipePageComponent, pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
