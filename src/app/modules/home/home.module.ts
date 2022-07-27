import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ButtonModule } from '../button/button.module';
import { PagesModule } from '../pages/pages.module';
import { IntroComponent } from './components/intro/intro.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [IntroComponent, HomeComponent],
	imports: [BrowserModule, CommonModule, PagesModule, ButtonModule, AppRoutingModule],
	exports: [IntroComponent],
})
export class HomeModule {}
