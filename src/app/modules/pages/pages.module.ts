import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { ButtonModule } from '../button/button.module';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form/sign-up-form.component';
import { ModalModule } from '../modal/modal.module';
import { FormModule } from '../form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		SocialMediaComponent,
		RecipeItemComponent,
		RecipeListComponent,
		SignUpFormComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		ButtonModule,
		ModalModule,
		FormModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		SocialMediaComponent,
		RecipeItemComponent,
		RecipeListComponent,
		SignUpFormComponent,
	],
})
export class PagesModule {}
