import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { AnimationButtonComponent } from './components/animation-button/animation-button.component';

@NgModule({
	declarations: [HeaderComponent, AnimationButtonComponent],
	imports: [BrowserModule, CommonModule],
	exports: [HeaderComponent, AnimationButtonComponent],
})
export class PagesModule {}
