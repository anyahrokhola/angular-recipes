import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { InputTextComponent } from './components/input-text/input-text.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
	imports: [BrowserModule, MatInputModule, MatSelectModule, ModalModule],
	declarations: [InputTextComponent, InputSelectComponent],
	exports: [InputTextComponent, InputSelectComponent],
})
export class FormModule {}
