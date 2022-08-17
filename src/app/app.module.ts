import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { TooltipModule } from './modules/tooltip/tooltip.module';
import { NotifierModule } from 'angular-notifier';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxValidationMessagesModule } from '@lagoshny/ngx-validation-messages';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';

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

import { ValidationInterceptor } from './modules/validation';
import { ApiInterceptor, AutoPopulateInterceptor, ParseInterceptor } from './interceptors';

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
		BrowserAnimationsModule,
		MatSliderModule,
		ModalModule,
		MatDialogModule,
		PagesModule,
		HomeModule,
		ButtonModule,
		RecipesModule,
		AddRecipeModule,
		HttpClientModule,
		NotifierModule,
		NgxValidationMessagesModule.forRoot({
			messages: {
				// Key is validator name, value is validator message
				required: 'This is required filed!',
				email: 'Error email format',
				differentPasswords: 'Your passwords are different',
				// If validator gets params, you can specify params placeholder in the validation message
				// to get validator params values for constructing more detail message
				maxlength: 'Max count symbols are #[requiredLength]',
				minlength: 'Min count symbols are #[requiredLength]',
			},
		}),
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: AutoPopulateInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ParseInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ValidationInterceptor, multi: true },

		{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
