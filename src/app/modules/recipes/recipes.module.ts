import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
	declarations: [RecipesComponent],
	imports: [CommonModule, PagesModule],
})
export class RecipesModule {}
