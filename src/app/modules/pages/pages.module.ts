import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { AnimationButtonComponent } from './components/animation-button/animation-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@NgModule({
	declarations: [HeaderComponent, AnimationButtonComponent, FooterComponent, SocialMediaComponent],
	imports: [BrowserModule, CommonModule],
	exports: [HeaderComponent, AnimationButtonComponent, FooterComponent, SocialMediaComponent],
})
export class PagesModule {}
