import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { PagesModule } from '../pages/pages.module';
import { ProductsModule } from '../products/products.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [RecipesComponent],
	imports: [CommonModule, PagesModule, ProductsModule, HttpClientModule],
})
export class RecipesModule {}
