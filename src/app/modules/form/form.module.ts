import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextComponent } from './components/input-text/input-text.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [InputTextComponent],
	imports: [BrowserModule, MatInputModule],
	exports: [InputTextComponent],
	providers: [],
})
export class FormModule {}
