import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { InputTextComponent } from './components/input-text/input-text.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { ModalModule } from '../modal/modal.module';
import { FormControlValidationDirective } from './directives/form-control-validation.directive';
import { NgxValidationMessagesModule } from '@lagoshny/ngx-validation-messages';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		BrowserModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		ModalModule,
		NgxValidationMessagesModule,
		ReactiveFormsModule,
		FormsModule,
	],
	declarations: [InputTextComponent, InputSelectComponent, FormControlValidationDirective],
	exports: [InputTextComponent, InputSelectComponent],
})
export class FormModule {}
