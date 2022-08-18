import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { PagesModule } from '../pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from 'src/app/core/core.module';
import { RecipeViewComponent } from './pages/recipe-view/recipe-view.component';
import { ButtonModule } from '../button/button.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
	declarations: [RecipeListComponent, RecipeViewComponent],
	imports: [CommonModule, PagesModule, HttpClientModule, CoreModule, ButtonModule, AppRoutingModule],
})
export class RecipesModule {}
