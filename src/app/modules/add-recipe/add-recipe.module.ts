import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipePageComponent } from './pages/add-recipe-page/add-recipe-page.component';
import { FormModule } from '../form/form.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
	declarations: [AddRecipePageComponent],
	imports: [CommonModule, FormModule, ButtonModule],
})
export class AddRecipeModule {}
