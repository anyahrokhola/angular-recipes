import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { AnimationButtonComponent } from './components/animation-button/animation-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

@NgModule({
	declarations: [
		HeaderComponent,
		AnimationButtonComponent,
		FooterComponent,
		SocialMediaComponent,
		RecipeItemComponent,
		RecipeListComponent,
	],
	imports: [BrowserModule, CommonModule],
	exports: [
		HeaderComponent,
		AnimationButtonComponent,
		FooterComponent,
		SocialMediaComponent,
		RecipeItemComponent,
		RecipeListComponent,
	],
})
export class PagesModule {}
