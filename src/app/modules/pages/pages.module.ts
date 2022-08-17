import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { ButtonModule } from '../button/button.module';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form/sign-up-form.component';
import { ModalModule } from '../modal/modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { MatInputModule } from '@angular/material/input';
import { PasswordTogleDirective } from './directives/password-togle/password-togle.directive';
import { ValidationModule } from '../validation/validation.module';
import { NgxValidationMessagesModule } from '@lagoshny/ngx-validation-messages';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		SocialMediaComponent,
		RecipeItemComponent,
		SignUpFormComponent,
		PasswordTogleDirective,
	],
	imports: [
		BrowserModule,
		CommonModule,
		ButtonModule,
		MatInputModule,
		ModalModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		CoreModule,
		HttpClientModule,
		NotifierModule,
		ValidationModule,
		NgxValidationMessagesModule,
		MatInputModule,
	],
	exports: [HeaderComponent, FooterComponent, SocialMediaComponent, RecipeItemComponent, SignUpFormComponent],
})
export class PagesModule {}
