import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalMainComponent } from './components/modal-main/modal-main.component';

@NgModule({
	declarations: [ModalMainComponent],
	imports: [BrowserModule, CommonModule],
	exports: [ModalMainComponent],
})
export class ModalModule {}
