import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipePageComponent } from './pages/add-recipe-page/add-recipe-page.component';
import { ButtonModule } from '../button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AddRecipePageComponent],
	imports: [CommonModule, ButtonModule, FormsModule, ReactiveFormsModule],
})
export class AddRecipeModule {}
