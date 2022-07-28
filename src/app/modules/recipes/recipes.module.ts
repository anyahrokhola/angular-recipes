import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { PagesModule } from '../pages/pages.module';
import { ProductsModule } from '../products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './pages/recipe/recipe.component';

@NgModule({
	declarations: [RecipesComponent, RecipeComponent],
	imports: [CommonModule, PagesModule, ProductsModule, HttpClientModule],
})
export class RecipesModule {}
