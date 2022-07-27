import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOutlineDirective } from './directives/btn-outline/btn-outline.directive';
import { BtnLinkDirective } from './directives/btn-link/btn-link.directive';
import { BtnIntroDirective } from './directives/btn-intro/btn-intro.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [BtnOutlineDirective, BtnLinkDirective, BtnIntroDirective],
	exports: [BtnOutlineDirective, BtnLinkDirective, BtnIntroDirective],
})
export class ButtonModule {}
