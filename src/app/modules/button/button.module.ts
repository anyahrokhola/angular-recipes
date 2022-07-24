import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOutlineDirective } from './directives/btn-outline/btn-outline.directive';
import { BtnLinkDirective } from './directives/btn-link/btn-link.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [BtnOutlineDirective, BtnLinkDirective],
	exports: [BtnOutlineDirective, BtnLinkDirective],
})
export class ButtonModule {}
