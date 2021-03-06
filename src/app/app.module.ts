import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { TooltipModule } from './modules/tooltip/tooltip.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';

import { FormModule } from './modules/form/form.module';
import { ButtonModule } from './modules/button/button.module';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '@env/environment';
import { ModalModule } from './modules/modal/modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PagesModule } from './modules/pages/pages.module';
import { HomeModule } from './modules/home/home.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { AddRecipeModule } from './modules/add-recipe/add-recipe.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		TooltipModule,
		MatButtonModule,
		AppRoutingModule,
		NgxsModule.forRoot([], {
			developmentMode: !environment.production,
			compatibility: { strictContentSecurityPolicy: true },
		}),
		NgxsFormPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
		NgxsStoragePluginModule.forRoot({ key: ['forms'] }),
		FormsModule,
		ReactiveFormsModule,
		FormModule,
		BrowserAnimationsModule,
		MatSliderModule,
		ModalModule,
		MatDialogModule,
		PagesModule,
		HomeModule,
		ButtonModule,
		RecipesModule,
		AddRecipeModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
