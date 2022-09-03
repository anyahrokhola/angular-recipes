import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipePageComponent } from './pages/add-recipe-page/add-recipe-page.component';
import { ButtonModule } from '@shared/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxValidationMessagesModule } from '@lagoshny/ngx-validation-messages';
import { NotifierModule } from 'angular-notifier';
import { UploadModule } from '@shared/upload/upload.module';

@NgModule({
	declarations: [AddRecipePageComponent],
	imports: [
		CommonModule,
		ButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		NgxValidationMessagesModule,
		NotifierModule,
		UploadModule,
	],
})
export class AddRecipeModule {}
