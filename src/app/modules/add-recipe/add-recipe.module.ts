import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipePageComponent } from './pages/add-recipe-page/add-recipe-page.component';
import { FormModule } from '../form/form.module';
import { ButtonModule } from '../button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxValidationMessagesModule } from '@lagoshny/ngx-validation-messages';

@NgModule({
	declarations: [AddRecipePageComponent],
	imports: [
		CommonModule,
		FormModule,
		ButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		NgxValidationMessagesModule,
	],
})
export class AddRecipeModule {}
