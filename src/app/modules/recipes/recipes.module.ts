import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { PagesModule } from '../pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
	declarations: [RecipesComponent, RecipeComponent],
	imports: [CommonModule, PagesModule, HttpClientModule, CoreModule],
})
export class RecipesModule {}
