import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from '../pages/pages.module';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
	declarations: [IntroComponent],
	imports: [BrowserModule, CommonModule, PagesModule],
	exports: [IntroComponent],
})
export class HomeModule {}
